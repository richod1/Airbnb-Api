const airService=require("../services/airbnbServices")


const getAllAirbnb=((req,res)=>{
    const allAirbnb=airService.getAllAirbnb();
    res.send("Get all Airbnb apis")
})

const getOneAirbnb=((req,res)=>{
    const Airbnb=airService.getOneAirbnb();
    res.send("Get One airbnb api")
})

const createNewAirbnb=((req,res)=>{
    const createAirbnb=airService.createNewAirbnb();
    res.send("Create New airbnb api")
})

const updateOneAirbnb=((req,res)=>{
    const updatedAirbnb=airService.updateOneAirbnb();
    res.send("Update One Airbnb api")
})

const deleteOneAirbnb=((req,res)=>{
    airService.deleteOneAirbnb();
    res.send("Delete one existing airbnb api")
})

module.exports={
    getAllAirbnb,
    getOneAirbnb,
    createNewAirbnb,
    updateOneAirbnb,
    deleteOneAirbnb
}