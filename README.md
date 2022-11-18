const express =require("express")
const messagesRaoter = require("./routers/messages")

class server{
    constructor(){
        this.app =express()
        this.port = process.env.PORT
        this.paths ={
            messages:"/api/v1/messages",
        }

        this.routers()
    }

    routers(){
        //this.app.get("/",(req,res)=>{
          //  res.send("Hola Mundo")
        //}) // end point
        this.app.use(this.paths.messages, messagesRaoter)
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corrinedo en el puerto 4000",this.port)
        })
    }
}

module.export = server # Trabajo-Dragon-Ball
# backendB-4
