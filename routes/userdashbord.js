const express=require("express")
const router=express.Router()
const Userdashbord=require("../models/Userdashbord")
const User=require("../models/User")

const Likephoto=require("../models/Likesphoto")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const app = express();

router.get("/memberslist",(req,res)=>{
  User.find({})
  .then(result=>{if (result)  return res.json({listmembers:result}) ;})
  .catch(error=>res.json({error:error})) 
})

router.patch("/blockuser/:iduser",async(req,res)=>{
  const id=req.params.iduser
  User.findByIdAndUpdate(id, { $set :{etat: "desactive"} },(err,result)=>{
  
       if (err)
        res.json({error:err})
        else  
        { 

        res.status(200).json({msg:"user is bloked",user:result})}
      })

})

router.patch("/deblockuser/:iduser",async(req,res)=>{
  const id=req.params.iduser
  User.findByIdAndUpdate(id, { $set :{etat: "active"} },(err,result)=>{
  
       if (err)
        res.json({error:err})
        else  
        { 

        res.status(200).json({msg:"user is debloked",user:result})}
      })

})


router.post("/logindashbord", (req, res) => {
     const { email, password } = req.body

     Userdashbord.findOne({ email })
     .then(user=> {
       if (user){
                        console.log(user)

         bcrypt.compare(password,user.password).then(result=>
           {if (result){ 

                 const jwttoken="KHALED"
               const token=   jwt.sign({_id:user._id}, jwttoken);
               console.log(result)
        return     res.json({user,token})} 
          else if(!result) 
                         console.log(result)

         {  
            return  res.status(200).json({ msg: "wrong password" })}
   })
          } 
     else 
      {          
return res.json({ msg: "wrong user" })}
            })
       .catch(err=> res.status(500).json({ error: err })
     )  
   })

   router.get("/profiledashbord/:idprofile",(req,res)=>{
     const idprofile=req.params.idprofile
     Userdashbord.findById(idprofile)
     .then(result=>{if (result)  return res.json({profile:result}) ;else return res.json({msg:"profile not found"})})
     .catch(error=>res.json({error:error}))
   })

   router.patch("/updatephoto",async(req,res)=>{
     const url=req.body.url
     const id=req.body.id
     Userdashbord.findByIdAndUpdate(id, { $set :{url: url} },(err,result)=>{
     
          if (err)
           res.json({error:err})
           else  
           { 
  
           res.status(200).json({msg:"user image is updatet",user:result})}
         })

   })

router.patch("/profiledashbord/:id",async (req,res)=>{

  if (req.body.password=="00000000"){
    const x=await     Userdashbord.findById(req.params.id)
          try{
            if (x)
         { var  newnew=x.password}
          
          }
          catch(error){
            console.log(error)
          }
}
else
          {  var newnew=new User().hashPassword(req.body.password)}

const userupdate= {lastname:req.body.lastname,firstname:req.body.firstname,email:req.body.email,password:newnew}
Userdashbord.findOneAndUpdate({_id:req.params.id},{$set:userupdate},(err,result)=>{
     
        if (err)
         res.json({error:err})
         else  
         { 

         res.status(200).json({msg:"user is updatet",user:userupdate})}
       })
})

router.post("/notificationdashbord", async (req, res) => {
  const{idphotolike,url,id,name} = req.body;
  const idstring=id.toString()
 


  try{
    const like=await Likephoto.find({ _id:idphotolike, "idsenders.id": idstring   })
console.log(like.length)
    if (like.length>0){ return   res.json({like:"deja added"})}  
    else 
     {  

           try {
            let vr = await Likephoto.findOneAndUpdate(
              {_id:idphotolike},{$push: {"idsenders": {id,url,name,time:Date.now() }}},{upsert: true, new : true}
        )

               return  res.send({msg:"ok"})
              
          }

            catch(error){res.send({msg:error}) }

        }}
        catch(error){res.send({msg:error}) }
      
      })  
   router.get("/notificationdashbord/:iduser",async(req,res)=>{
     const iduser=req.params.iduser
    try{
      const like=await Likephoto.find({ _id:iduser   })
  // console.log(like)
  // console.log(like.length)

      if (like.length>0){ return   res.json({userslikedphoto:like})}}  
          catch(error){res.send({msg:error}) }
     
   })   
router.patch("/notificationdashbord/:iduser",async(req,res)=>{
  const idremoveuser=req.body.iduserremoved
  const iduser=req.params.iduser
  console.log(iduser)
  console.log(idremoveuser)

  try {
    const removeuserlike=await Likephoto.updateOne({_id:iduser},{ "$pull" : { "idsenders" : { "id" :  idremoveuser } } }) 
console.log(removeuserlike)
  } catch (error) {
    
  }
})
module.exports=router