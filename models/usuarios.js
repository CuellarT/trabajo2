const modelUsuarios ={
    queryGetUser:"SELECT * FROM Usuario",
    queryGetUserByID:"",
    queryDeleteUserByID:"" ,
    queryUserExists: "",
    queryAddUser:"", 
    querySignin:"", 


}

const updateUserByUsuario = (
    Nombre,
    Apellidos,
    Edad,
    Genero,
    Usuario,
    Fecha_Nacimiento,
)  =>{
    return
    `UPDATE Usuario SET 
        Nombre = '${Nombre}', 
        Apellidos= '${Apellidos}',
        Edad = ${Edad},
        ${ Genero ? `Genero='${Genero}',`: '' }
        Fecha_Nacimiento = '${Fecha_Nacimiento}'
        WHERE 
            Usuario ='${Usuario}'`
    
}

module.exports = {modelUsuarios ,updateUserByUsuario }