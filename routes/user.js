const express=require("express")
const router=express.Router()
const User=require("../models/User")
const jwt=require("jsonwebtoken")
const Likephoto=require("../models/Likesphoto")
const Signalisation=require("../models/Signalisation")



const bcrypt=require("bcrypt");

const app = express();

const  auto=async(req,res,next)=>{
  const jwttoken="KHALED"
       
      const header = req.headers["authorization"];
    const token=header && header.split(" ")[1]
   if (header==null){res.send("no autorization ")}
   

   jwt.verify(token,jwttoken,(err,result)=>{
    if(err) {console.log(err)}
    console.log(result)
    User.findOne({_id:result._id})
    .then(user=>{    if (!user){return res.json({msg:"you are not authorize"})}
        console.log(user);req.user=user;      next()      })
        .catch(err=>console.log(err))

  })

    }
 


   
router.post("/signup", async (req, res) => {
     const {firstname, lastname, email, password } = req.body;
     User.find({email},async(error,result)=>{
       if (result.length>0)   {     return     res.json({ msg: "user already added" });  }

     try {
        const newModel = new User({
            lastname,
            firstname,
            email,
            password:new User().hashPassword(password),
            createAt:Date.now(),
          })
         await newModel.save()
         const jwttoken="KHALED"
         const token=jwt.sign({_id:newModel._id}, jwttoken);
         return  res.send({msg:"ok",user:newModel,token})
         
     } catch (error) {
         
       res.send({msg:error})

     }
    })
})


router.post("/login", (req, res) => {
  // remeberme:remeberme.remeberme,

     const { email, password,remeberme } = req.body
     User.findOne({ email })
     .then(user=> {
       if (user){
         bcrypt.compare(password,user.password).then(result=>
           {if (result){ 
            const jwttoken="KHALED"
            const token=   jwt.sign({_id:user._id}, jwttoken);
               
        return     res.json({user,token})} 
          else if(!result) 
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

   router.get("/profile/:idprofile",async(req,res)=>{
      const idprofile=req.params.idprofile
      User.findById(idprofile)
      .then(result=>{if (result)  return res.json({profile:result}) ;else return res.json({msg:"profile not found"})})
      .catch(error=>res.json({error:error}))
    
   })

router.get("/allusers",async(req,res)=>{
  try {
    const allusers=await User.find().select("_id firstname lastname url age country likephoto createAt")
    return res.json({allusers:allusers})
  } catch (error) {
    return res.json({msg:error})
  }
});

   router.post("/updatephoto", async (req, res) => {
    const{id,url} = req.body;
  
      const urlphoto=url.toString()
  
    try{
             const photo=await User.find({ _id:id,  photo: { $size: 5 }    })

      if (photo.length>0){ return   res.json({photo:"photo lengeth 5"})}  
      else 
       {   
  
             try {
              let vr = await User.findOneAndUpdate(
                {_id:id},{ $set :{url: url},$push: {"photo": {url,time:Date.now() }}},{upsert: true, new : true}
          )

                 return  res.send({msg:"ok"}) 
            }
  
              catch(error){res.send({msg:error}) }
  
          }}
          catch(error){res.send({msg:error}) }
        
        })  

        router.patch("/photo/:iduser",async(req,res)=>{
          const {iduser}=req.params
          const {url,imageprofile}=req.body
    

  if (url==imageprofile){

    User.updateOne({_id:iduser},{ "$pull" : { "photo" : { "url" :  url } } })
.then(photolike=>{  if (photolike) { console.log("ok")}     })
.catch(err=> res.json({msg:err}))
    try {
      let vr = await User.findOneAndUpdate({_id:iduser},{ $set :{url:"data:image/png;base64,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"
}})

         return  res.send({msg:"updatedefaultremoved ok"}) 
    }

      catch(error){res.send({msg:error}) }}
    else { 
      try {
        const removeuserlike=await User.updateOne({_id:iduser},{ "$pull" : { "photo" : { "url" :  url } } }) 
        return res.json({remove:"ok"})
      } catch (error) {
        return res.json({error:error})
      }

    }
        })

  router.patch("/photodefault/:id",async (req,res)=>{
    const {id,url}=req.body
    const userphotodefaultupdate= {id,url}
    User.findOneAndUpdate({_id:req.params.id},{$set:userphotodefaultupdate},(err,photo)=>{
            if (err)
             res.json({error:err})
             else  
             { 
    
             res.status(200).json({msg:"photodefault is updatet",photo})}
           })
    })

      router.patch("/profileageandcountry/:id",async (req,res)=>{
    const {country,age}=req.body
    User.findOneAndUpdate({_id:req.params.id},{$set:{country,age}},(err,result)=>{
            if (err)
             res.json({error:err})
             else  
             { 
    
             res.status(200).json({msg:"ageandcuontry is updatet",result})}
           })
    })

    


router.patch("/profile/:id",async (req,res)=>{
const {lastname,firstname,email,password,twitter,linkedin,facebook,skype,insragram,url}=req.body
  if (req.body.password=="00000000"){
    const x=await     User.findById(req.params.id)
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

const userupdate= {lastname,firstname,email,password:newnew,twitter,linkedin,facebook,skype,insragram,url}
User.findOneAndUpdate({_id:req.params.id},{$set:userupdate},(err,result)=>{
     
        if (err)
         res.json({error:err})
         else  
         { 

         res.status(200).json({msg:"user is updatet",user:result})}
       })
})

router.post("/notification", async (req, res) => {
  
  const{idphotolike,url,id,name,member} = req.body;

  const idstring=id.toString()
    const idphoto=idphotolike.toString()
  try{
    const like=await Likephoto.find({ _id:idphoto, "idsenders.id": idstring   })
    if (like.length>0){

      User.updateOne({_id:idphotolike},{ "$pull" : { "likephoto" : { "id" :  idstring } } })
  .then(photo=>{  if (photo) {console.log("ok") }     })
      .catch(err=> console.log(error))

      
      return   res.json({like:"deja added"})}  
    else 
     {  

User.findOneAndUpdate(  
              {_id:idphotolike},{$push: {"likephoto": {id:id,url,name,time:Date.now(),member }}},{upsert: true, new : true}
          )
        .then(photo=>{  if (photo) {console.log("ok") }     })
            .catch(err=> console.log(error))


        Likephoto.findOneAndUpdate(  
              {_id:idphotolike},{$push: {"idsenders": {id:id,url,name,time:Date.now() }}},{upsert: true, new : true}
          )
        .then(photolike=>{  if (photolike) {return res.json({msg:"ok"})}     })
            .catch(err=> res.json({msg:err}))

        }}
        catch(error){res.send({msg:error}) }
      
      })  
   router.get("/notification/:iduser",async(req,res)=>{
     const iduser=req.params.iduser
    try{
      const like=await Likephoto.find({ _id:iduser   })

      if (like.length>0){ 
        return   res.json({userslikedphoto:like})}}  
          catch(error){res.send({msg:error}) }
     
   })   
router.patch("/notification/:iduser",async(req,res)=>{
  const idremoveuser=req.body.iduserremoved
  const iduser=req.params.iduser

  try {
    const removeuserlike=await Likephoto.updateOne({_id:iduser},{ "$pull" : { "idsenders" : { "id" :  idremoveuser } } }) 
  } catch (error) {
    
  }
})


router.post("/signalisation", async (req, res) => {
  const{iduser,id} = req.body;
  const iduserstring=iduser.toString()

  // const nomber=User.addSignal(5)
  // console.log(nomber)

  try{
    const signal=await Signalisation.find({ _id:id, "idsenders.iduser": iduserstring   })
    if (signal.length>0){ 
      console.log(User.nombresignalisation)

      return   res.json({signal:"deja signaler"})}  
    else 
     {  

           try {
            let vr = await Signalisation.findOneAndUpdate(
              {_id:id},{$push: {"idsenders": {iduser,time:Date.now() }}},{upsert: true, new : true}
        )
  User.findOne({_id:id},(err,result)=>{
     
          if (err)
{console.log(err)          
} else  
           { 
             
            result.nombresignalisation=result.nombresignalisation+1
  result.save()
          //  res.status(200).json({msg:"user signal is updatet"})
        }
         } ) 
               return  res.send({msg:"signal ok"})
              
          }

            catch(error){res.send({msg:error}) }

        }}
        catch(error){res.send({msg:error}) }
      
      })
module.exports=router