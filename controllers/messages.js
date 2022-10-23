const { request, response } = require("express")

const rootMessage=(req = request,res = response)=>{
    const {nombre, apellido_paterno} = req.query
   // console.log(nombre)
   if (!nombre){
    res.status(400).json({
        msg:"falta indicar el nombre"
    })
    return
 }
 if(!apellido_paterno){
    res.status(400).json({
        msg: "FALTA indicar el apellido"

    })
    return

 }
 res.status(200).json({ msg: " mi nombre es " + nombre + "" + apellido_paterno})
   
}

const hiMessage=(req = request,res = response) => {
    const {name, edad} = req.params
    res.json({msg:"hola" + name + "" + edad})
}

const byeMessage = (req = request,res = response)=> {
    res.status(412).json({msg:"adios mundo"})

}

const postMessage = (req = request,res = response)=> {
    const{no_control, nombre} = req.body
   // console.log({no_control, nombre})
    res.status(426).json({msg: `numero de control: ${no_control}, nombre: ${nombre}`})

}
const putMessage = (req = request,res = response)=> {
    res.status(451).json({msg:"Mensaje PUT"})

}
const deleteMessage = (req = request,res = response)=> {
    res.status(501).json({msg:"Mensaje DELETE"})

}



module.exports = {rootMessage ,hiMessage ,byeMessage,postMessage,putMessage,deleteMessage}