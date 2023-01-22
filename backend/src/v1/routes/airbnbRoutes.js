const express=require("express")
const airbnbController=require("../../controllers/airbnbController")

const router=express.Router()

router.get("/",airbnbController.getAllAirbnb)

router.get("/:airbnbId",airbnbController.getOneAirbnb)

router.post("/",airbnbController.createNewAirbnb)

router.patch("/:airbnbId",airbnbController.updateOneAirbnb)

router.delete("/:airbnbId",airbnbController.deleteOneAirbnb)

module.exports=router;