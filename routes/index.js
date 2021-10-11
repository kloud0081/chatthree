const express=require("express")
const router=express.Router()
const Listchat=require("../models/Listchat")
const User=require("../models/User")
const Friends=require("../models/Friends")

const jwt=require("jsonwebtoken")

router.post("/addfriend", async (req, res) => {
  
  const{idinv,url,id,name,member} = req.body;

  const idstring=id.toString()
    const idphoto=idinv.toString()
  try{
    const like=await Friends.find({ _id:idphoto, "idsenders.id": idstring   })
    if (like.length>0){ return   res.json({like:"deja inv added"})}  
    else 
     {  

User.findOneAndUpdate(  
              {_id:idinv},{$push: {"friends": {id:id,url,name,time:Date.now(),member }}},{upsert: true, new : true}
          )
        .then(result=>{  if (result) {console.log("ok") }     })
            .catch(err=> console.log(error))


            Friends.findOneAndUpdate(  
              {_id:idinv},{$push: {"idsenders": {id,url,name,time:Date.now() }}},{upsert: true, new : true}
          )
        .then(result=>{  if (result) {return res.json({msg:"ok"})}     })
            .catch(err=> res.json({msg:err}))

        }}
        catch(error){res.send({msg:error}) }
      
      })  
   router.get("/friends/:iduser",async(req,res)=>{

     const iduser=req.params.iduser

    try{
      const add=await Friends.find({ _id:iduser   })

      if (add.length>0){ 
        console.log(add)

        return   res.json({listfriends:add})}}  
          catch(error){res.send({msg:error}) }
     
   })   
router.patch("/friends/:iduser",async(req,res)=>{
  const idremoveuser=req.body.iduserremoved
  const iduser=req.params.iduser
  User.updateOne({_id:iduser},{ "$pull" : { "friends" : { "id" :  idremoveuser } } })
  .then(photolike=>{  if (photolike) { console.log("ok")}     })
  .catch(err=> res.json({msg:err}))
  try {
    const removeuserlike=await Friends.updateOne({_id:iduser},{ "$pull" : { "idsenders" : { "id" :  idremoveuser } } }) 
  } catch (error) {
    
  }


 
})




const  auto=async(req,res,next)=>{
  const jwttoken="KHALED"
       
      const header = req.headers["authorization"];
    const token=header && header.split(" ")[1]
   if (header==null){res.send("no autorization ")}
   jwt.verify(token,jwttoken,(err,result)=>{
    if(err) {console.log(err) ;return res.json({msg:"you are not authorize"})}
    User.findOne({_id:result._id})
    .then(user=>{    if (!user){ return res.json({msg:"you are not authorize"})}
        req.user=user;      next()      })
        .catch(err=>{return res.json({msg:"you are not authorize"})})

  })

    }

router.get("/getuser",auto,(req,res)=>{
return res.json({user:req.user})
})

 router.post("/message",async(req,res)=>{
  
  
     const {idsender1,idreciver1,name,listchat,textarea}=req.body
console.log(name)
     const idsender=idsender1.toString()
    
     const idreciver=idreciver1.toString()

     try{
               const result=await Listchat.find({listchat:{$all:[idsender,idreciver]},})

       if (result.length>0){
       try {
        let vr = await Listchat.findOneAndUpdate(
          {listchat:{$all:[idsender,idreciver]}},{ $set :{timestart:Date.now() },$push: {"msg": {idsender,idreciver,time:Date.now(),msg:textarea }}},{upsert: true, new : true}
        )

    return  res.send({msg:"updatet",result:vr})
          
      }

        catch(error){res.send({error:error}) }

    }

    else{
      const newModel=new Listchat({listchat:[idsender,idreciver],msg:[{idsender,idreciver,time:Date.now(),msg:textarea }],reciver:name})
     try{
      const  saved= await newModel.save()
         return res.json({save:"savednew",result:saved})
     }
     catch(error){return res.json({error:error})}
    }

  }
      
       

           catch(error){res.send({msg:error}) }
         

 })


  router.get("/message/:iduser",async(req,res)=>{
     const iduser=req.params.iduser
  
       try {
          const result=await Listchat.find({listchat:{$in:[iduser]},}).sort({date: -1})
         return  res.json({listconversation:result})
   
       } catch (error) {
           return res.json({error:error})
       }
     })
     


module.exports=router
