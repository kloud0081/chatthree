const mongoose=require("mongoose")
const likephotoshema=new mongoose.Schema({
    idphotolike:{type:String},
    idsenders: { type:[Object]}
})
    
module.exports=mongoose.model("likephot",likephotoshema)