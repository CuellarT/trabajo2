const{Router} = require("express")
const {getUsers , getUserByID, deleteUserByID, addUser,updateUserByUsuario ,signIn, passuser } = require( "../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/users/id/2
//http://localhost:4000/api/v1/usuarios/id/

//GET//

router.get("/", getUsers)
router.get("/id/:id", getUserByID)

//POS//
router.post("/",addUser)
router.post("/signin" ,signIn)
router.post("/passuser",passuser)
///pacht//

//Put//
router.put("/" , updateUserByUsuario)


router.delete("/id/:id", deleteUserByID)

module.exports = router