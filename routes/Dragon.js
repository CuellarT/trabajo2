const{Router} = require("express")
const {getDragon,getDragonByID,deleteDragonByID,addDragon } = require( "../controllers/Dragon")
const router = Router()

// http://localhost:4000/api/v1/users/id/2
//http://localhost:4000/api/v1/Dragon/id/

//Get//

router.get("/",getDragon)
router.get("/id/:id",getDragonByID)

//pos//
router.post("/",addDragon)

//PUT// 
router.delete("/id/:id",deleteDragonByID)

module.exports = router