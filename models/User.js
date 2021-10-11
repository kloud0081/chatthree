const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const usershema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,requird:true},
    email:{type:String,requird:true},
    twitter  :{type:String,default:"twitter"},
        facebook  :{type:String,default:"facebook"},
    linkedin  :{type:String,default:"linkedin"},
    skype  :{type:String,default:"skype"},
    instagram  :{type:String,default:"instagram"},
    remeberme:{type:String,default:true},
    password:{type:String,requird:true},
    createAt:{type:Date},
    nombresignalisation:{type:Number,default:0},
    likephoto: { type:[Object]},
    friends:{ type:[Object]},
    etat:{type:String,default:"active"},
    photo: { type:[Object] },
    country:{type:String,default:""},
        age:{type:String,default:""},
     url:{type:String,default:
        "data:image/png;base64,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"}
})
usershema.methods.hashPassword=function (password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)}  
    usershema.methods.comparePassword=function(password){
        return bcrypt.compareSync(password,this.password )
    }
module.exports=mongoose.model("User",usershema)