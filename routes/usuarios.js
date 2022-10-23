const{Router} = require("express")
const {getUsers , getUserByID, deleteUserByID, addUser} = require( "../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/users/id/2
//http://localhost:4000/api/v1/usuarios/id/

//GET//

router.get("/", getUsers)
router.get("/id/:id", getUserByID)

//POS//
router.post("/",addUser)


router.delete("/id/:id", deleteUserByID)

module.exports = router