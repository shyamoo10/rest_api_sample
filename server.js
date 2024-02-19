const express=require('express')
const db_connection=require("./db_connection")
const UserRouter=require('../rest_api_sample/routes/usersRoutes')
const app=express()

app.use(express.json())
app.use("/users",UserRouter)
 app.listen(3000,()=>{
    console.log("server started at port 3000")
 })