const { request, response } = require ("express");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");

const getDragon = async (req = request , res = response )  =>  {

    let conn;


    try{
        conn = await pool.getConnection ()


        //generamos lla consutas 
        const personaje = await conn.query("SELECT * FROM Dragon", (error) =>{ if (error) throw error})

        if (!personaje){ 
            res.status(404).json({ msg: "no existen registros"})
            return
        }

        res.json({personaje})       
    }catch (error){
        console.log(error)
        res.status(500).json
    }
}

const getDragonByID = async ( req = request , res = response )=>{
    const {id} = req.params 
    let conn;

    try{
        conn =await pool.getConnection() //realisamos la conexion 

        //Generamos la consulta 

        const personaje  = await conn.query(`SELECT * FROM Dragon WHERE ID = ?`,[id] , (error) => { if (error) throw error })

        console.log(personaje)

        if (!personaje){ 
            res.status(404).json({msg:`No existe personajes  registrados con el ID ${id} ` })
            return
        }

        res.json({personaje}) // se manda la lista de  Dragon 
    } catch(error) {
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }  finally{
        if (conn) conn.end() // Termina la conecion 
    }
}

const deleteDragonByID = async (req = request,res = response) =>{
    const {id} = req.params
    let conn;

    try{
        conn =await pool.getConnection()// Realizamos la conexion//

        //Generamos la consultas

        const result = await conn.query(`UPDATE Dragon SET Activo = "N" WHERE ID = ${id} ` , (error) => { if (error) throw error })
        if (result.affecterdRows == 0){ // encaso de no haber registyrado la informacion //
            res.status(400).json({msg:`No existe usuarios registrados con el ID ${id} ` })
            return
        }
        res.json({msg:`Se elimino satisfactoriamente el usuario con ID ${id}`})

    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error})// Informamos el error 
    } finally {
        if (conn) conn.end() // termina la conecion 
    }

}
const addDragon = async ( req =request ,res = response) =>{
    const {Nombre, Apodo, Raza, Tecnica, Tansformacion, Nivel_de_pelea, Planeta, Universo,Genero, Activo}= req.body



    if( !Nombre||
        !Apodo|| 
        !Raza||
        !Tecnica||
        !Tansformacion||
        !Nivel_de_pelea||
        !Planeta||
        !Universo||
        !Genero||
        !Activo) 
    {  
        res.status(400).json({msg:"Faltan Datos"})
        return
    }
    const salt = bcryptjs.genSaltSync()


    let conn;
    try{
        conn = await pool.getConnection()
        const  [personajeExist]= await conn.query(`SELECT Nombre FROM Dragon WHERE Nombre = '?'`,[Nombre])

        if (personajeExist){
            res.status(400).json({msg:`El Personaje ${Nombre} ya se encuentra registrado.`})
            return
        }

        //Editar Datos Del usuario// 
        
        //Generamos la consulatas 

        const result = await conn.query(`INSERT INTO Dragon (Nombre,Apodo,Raza,Tecnica,Transformacion,Nivel_de_pelea,Planeta,Universo,Genero,Activo)VALUES (
            '${Nombre}',
            '${Apodo}',
            '${Raza}',
            '${Tecnica}',
            '${Tansformacion}',
            '${Nivel_de_pelea}',
            '${Planeta}',
            '${Universo}',
            '${Genero}',
            '${Activo}')`,(error) => { if(error) throw error})
            
        if (result.affecterdRows === 0){ //Encaso de no haber registro lo informamo
             res.status(400).json({msg:`No sepudo agregar el usuario`})
             return   

            }

            res.json({msg:`se agrego satisfatoriamente el usuario `})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error}) 
    } finally{
        if (conn) conn.end()
    }
    


}


module.exports = { getDragon,getDragonByID,deleteDragonByID,addDragon}