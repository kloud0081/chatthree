
const mongoose=require("mongoose")
const listchatshema=new mongoose.Schema({
    listchat: { type:[] },
    msg: { type:[Object] },
    timestart:{type:Date,default:Date.now()},
    reciver:{type:String}

})
    
module.exports=mongoose.model("listchat",listchatshema)