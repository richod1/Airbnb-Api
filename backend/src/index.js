const express=require("express")
const port=3000
const app=express()
// const V1Router=require("./v1/routes")
const V1AirbnbRouter=require("./v1/routes/airbnbRoutes")



// app.get('/',(req,res)=>{
//     res.send("am deraft")
// })
// app.use("/api/v1",V1Router)
app.use("/api/v1/airbnb",V1AirbnbRouter)

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})