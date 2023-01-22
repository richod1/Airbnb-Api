const DB=require("./db.json")

const getAllAirbnb=()=>{
    return DB.listingsandreview;
}

module.exports={getAllAirbnb}