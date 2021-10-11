const mongoose=require("mongoose")
const Signalisationshema=new mongoose.Schema({
    iduser:{type:String},
    idsenders: { type:[Object]}
})
    
module.exports=mongoose.model("signalisation",Signalisationshema)