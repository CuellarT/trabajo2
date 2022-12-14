const express = require("express")
const messagesRouter = require("./routes/messages")
const usuariosRouter = require("./routes/usuarios")
const dragonballRouter = require("./routes/Dragon")
const cors= require("cors")
class server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths ={
            messages:"/api/v1/messages",
            dragonball:"/api/v1/Dragon",
            usuarios:"/api/v1/usuarios"
        }
        this.middlewares()
        this.routes()
    }
    routes(){
        // this.app.get("/",(req,res))


        this.app.use(this.paths.messages,messagesRouter),
        this.app.use(this.paths.usuarios,usuariosRouter),
        this.app.use(this.paths.dragonball,dragonballRouter)
    }

    middlewares(){
        this.app.use(cors())//habilita origen cruzado//
        this.app.use(express.json())
          
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("servidor corrindo en el puerto 4000", this.port)
        })
    }
}

module.exports = server