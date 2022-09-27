const { Router} = require("express")
const router = Router()
const{
    rootMessage,
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage,
} = require("../controllers/messages")

    router.get("/",rootMessage)
    router.get("/hi",hiMessage)
    router.get("/bye",byeMessage)

    router.post("/", postMessage)//creo o añado//
    router.put("/", putMessage)//actualisar registros//
    router.delete("/", deleteMessage)//eliminar registros//
        

    module.exports = router 