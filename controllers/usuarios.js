const { request, response } = require ("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");

const getUsers = async (req = request , res = response ) => {
    
    let conn; 


    try {
        conn = await pool.getConnection() // Realizamos la conexion 


        //Generamos la consultas 

        const users = await conn.query("SELECT * FROM Usuario",(error) => { if (error) throw error })

        if (!users){ // En caso de no haber registros lo informamo 
            res.status(404).json({msg: "No existe usuarios registrados"})
            return
        }
        

        res.json({users}) // se manda la lista de usuarios 
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }

}

const getUserByID = async (req =request ,res =response ) =>{
    const {id} = req.params 
    let conn; 

    try {
        conn = await pool.getConnection() // Realizamos la conexion 


        //Generamos la consultas 

        const users = await conn.query( `SELECT * FROM Usuario WHERE ID = ${id} ` , (error) => { if (error) throw error })

        console.log(users)


        if (!users){ // En caso de no haber registros lo informamo 
            res.status(404).json({msg:  `No existe usuarios registrados con el ID ${id} ` })
            return
        }
        

        res.json({users}) // se manda la lista de usuarios 
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }

    
}

const deleteUserByID = async (req =request ,res =response ) =>{
    const {id} = req.params 
    let conn; 

    try {
        conn = await pool.getConnection() // Realizamos la conexion 


        //Generamos la consultas 

        const result = await conn.query( `UPDATE Usuario SET Activo = "N" WHERE ID = ${id} ` , (error) => { if (error) throw error })

        
        if (result.affecterdRows === 0 ){ // En caso de no haber registros lo informamo 
            res.status(404).json({msg:  `No existe usuarios registrados con el ID ${id} ` })
            return
        }
        

        res.json({msg:`Se elimino satisfactoriamente el usuario con ID ${id}`}) // se manda la lista de usuarios 
    } 
    
    catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }


}

const addUser = async (req =request ,res =response ) =>{
    const {Nombre, Apellidos,Edad,Genero= '',Usuario,Contrasena,Fecha_Nacimiento ='2000-01-01',Activo }= req.body
    


    if (!Nombre|| 
        !Apellidos||
        !Edad||
        !Edad||
        !Usuario||
        !Contrasena||
        !Activo)
     {
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    const salt = bcryptjs.genSaltSync()
    const contrasenaCifrada = bcryptjs.hashSync(Contrasena,salt)

    
    let conn; 
    
    try {
        conn = await pool.getConnection() // Realizamos la conexion 

        const [userExist]= await conn.query( `SELECT Usuario FROM Usuario WHERE Usuario = '${Usuario}'`)

        if (userExist){
            res.status(400).json({msg:`El usuario ${Usuario} ya se encuentra registrado.`})
            return
        }

        //Editar datos del usuario//
    

        //Generamos la consultas 

       const result = await conn.query( `INSERT INTO Usuario (Nombre, Apellidos, Edad, Genero, Usuario, Contrasena, Fecha_Nacimiento, Activo) VALUES (
            '${Nombre}',
            '${Apellidos}',
            ${Edad},
            '${Genero}',
            '${Usuario}',
            '${contrasenaCifrada}',
            '${Fecha_Nacimiento}',
            '${Activo}')`, (error) => { if (error) throw error })

        

        if (result.affecterdRows === 0 ){ // En caso de no haber registros lo informamo 
           res.status(404).json({msg:  `No sepudo agregar el usuario`})
            return
        }
        
        res.json({msg:`se agrego satisfatoriamente el usuario `})
        

        //res.json({msg:`Se elimino satisfactoriamente el usuario con ID ${id}`}) // se manda la lista de usuarios //
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }

}


const updateUserByUsuario = async (req =request ,res =response ) =>{
    const {Nombre, Apellidos,Edad,Genero,Usuario,Fecha_Nacimiento=`2001-02-15`}= req.body //URI params 
    


    if (!Nombre|| 
        !Apellidos||
        !Edad||
        !Usuario
      
    ){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }

    
    let conn; 

    //validar que no exista el usuario 
    try {
        conn = await pool.getConnection() // Realizamos la conexion 


        //Generamos la consultas 

        const [usersExist] = await conn.query( `SELECT Usuario FROM Usuario WHERE Usuario = '${Usuario}' ` , (error) => { if (error) throw error })


        if (!usersExist){
            res.status(400).json({msg:`El Usuario ${Usuario} no se encuentra registrado.`})
            return
        }

        //Editar datos del usuario//
    

        //Generamos la consultas 

       const result = await conn.query( `UPDATE Usuario SET 
        Nombre = '${Nombre}', 
        Apellidos= '${Apellidos}',
        Edad = ${Edad},
        ${ Genero ? `Genero='${Genero}',`: '' }
        Fecha_Nacimiento = '${Fecha_Nacimiento}'
        WHERE 
            Usuario ='${Usuario}'`,(error) => { if (error) throw error })

        if (result.affecterdRows === 0 ){ // En caso de no haber registros lo informamo 
           res.status(404).json({msg:  `No sepudo Actualizar el usuario  el usuario`})
            return
        }
        
        res.json({msg:`se Actualizo  satisfatoriamente el usuario `})
        

        //res.json({msg:`Se elimino satisfactoriamente el usuario con ID ${id}`}) // se manda la lista de usuarios //
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }

}

const signIn = async (req =request ,res =response ) =>{
    const {Usuario ,Contrasena} = req.body 


    if (!Usuario ||  !Contrasena){
        res.status(400).json({msg:"Faltan Datos."})
        return
    }

    let conn; 

    try {
        conn = await pool.getConnection() // Realizamos la conexion 


        //Generamos la consultas 

        const [user] = await conn.query( `SELECT Contrasena,Activo From Usuario  WHERE Usuario = ${Usuario} ` , (error) => { if (error) throw error })

        
        if (!user || user.Activo ===`N`){ // En caso de no haber registros lo informamo 
            res.status(404).json({msg:  "El usuario o contraseña que se ingreso no son validos "})
            return
        }

        const contrasenaValida = bcryptjs.compareSync(Contrasena, user.Contrasena)

        if(!contrasenaValida) {
            res.status(404).json({msg:  "El usuario o contraseña que se ingreso no son validos "})
            return

        }
        

        res.json({msg:"El usuario se ha autenticado correctamente"}) // se manda la lista de usuarios 
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error 
    } finally {
        if (conn) conn.end() // Termina la conecion

    }


}




module.exports = {getUsers , getUserByID, deleteUserByID , addUser,updateUserByUsuario,signIn  }