const express=require('express')
const router=express.Router()
const Users=require("../models/usersModel")


// to get all users list

router.get('/',async(req,res)=>{
  const users= await Users.find({})
  res.status(200).json({message:users})
})

    // to get a particular user

    router.get("/:id",userMiddleware, async(req,res)=>{
         try{
            res.status(200).json({message:res.users})
         }catch(err){
            res.status(500).json({message:err.message})
         }
    })

// to add a user

router.post('/', async(req,res)=>{

    try{
        const users= new Users({
            name:req.body.name,
            about:req.body.about
          })
        
        
     await users.save()
 res.status(201).json(users)
        
          
    }  catch(err){
        res.status(500).json({message:err.message})
    }
   
})

// to update a user

router.patch("/:id", userMiddleware,async(req,res)=>{
    if(req.body.name != null){
        res.users.name = req.body.name
    }
     if(req.body.about!= null){
        res.users.about = req.body.about
     }
     try{
       const updatedUser= await res.users.save()
        res.status(200).json({message:updatedUser})
     } catch(err){
      res.status(500).json({message:err.message})
     }
})

  // to delete the user 

  router.delete("/:id", userMiddleware,async(req,res)=>{
        try{
           await res.users.deleteOne()
           res.status(200).json({message:"User deleted"})
        }catch(err){
            res.status(500).json({message:err.message})
        }
  })

  async function userMiddleware(req,res,next){

  
    let users
    try{
       users= await Users.findById(req.params.id)
       if(users==null){
       return     res.status(404).json({message:"user not found"})
       } 
    } catch(err){
        res.status(500).json({message:err.message})
    }
     res.users=users
   next()
  }

module.exports=router