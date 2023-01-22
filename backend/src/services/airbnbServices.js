
const Airbnb=require("../database/AirbnbListings")
const getAllAirbnb=()=>{
    const allAirbnb=Airbnb.getAllAirbnb();
    return allAirbnb;
}

const getOneAirbnb=()=>{
    return;
}

const createNewAirbnb=()=>{
    return;
}

const updateOneAirbnb=()=>{
    return;
}

const deleteOneAirbnb=()=>{
    return;
}

module.exports={
    getAllAirbnb,
    getOneAirbnb,
    createNewAirbnb,
    updateOneAirbnb,
    deleteOneAirbnb
}