const mongoose=require('mongoose')
  require('dotenv').config()
 async function  databaseConnection(){
     await mongoose.connect(process.env.DB_url)
     console.log("Database connected successfully")
 }

 databaseConnection()

 