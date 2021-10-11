const mongoose=require("mongoose")
const friendshema=new mongoose.Schema({
    idinv:{type:String},
    idsenders: { type:[Object]}
})
    
module.exports=mongoose.model("friends",friendshema)

