const express = require("express")
const messagesRouter = require("./routes/messages")

class server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths ={
            messages:"/api/v1/messages"
        }

        this.routes()
    }
    routes(){
        // this.app.get("/",(req,res))


        this.app.use(this.paths.messages,messagesRouter)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("servidor corrindo en el puerto 4000", this.port)
        })
    }
}

module.exports = server