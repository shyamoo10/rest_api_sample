const mongoose=require("mongoose")
const UsersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about: {
        type:String,
        required:true
    },
    updated:{
        type:Date,
        default:Date.now(),
        required:true
    }
})

const Users=mongoose.model('Users',UsersSchema)
module.exports=Users