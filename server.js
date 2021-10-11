const express=require("express")
 const mongoose=require("mongoose")
 const path=require("path")
 const userRouter=require("./routes/user")
 const indexRouter=require("./routes/index")
 const userdashbordRouter=require("./routes/userdashbord")

//  var logger = require('morgan');


  const cors = require('cors')
// const morgan=require("morgan")
const app = express();
// app.use(logger('dev'));

app.use(express.json());

app.use(express.json());

  
 

  
 const url="mongodb+srv://data:data@cluster0.0hj2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 mongoose.connect(url,(error)=>{
     if (error) console.log(error)
    
 })
// const db=mongoose.connection

//  const http = require('http').Server(app);
//  const io = require('socket.io')(http, {
//      cors: {
//        origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//         allowedHeaders: ["my-custom-header"],
//         credentials: true
//      }
//    });

//    let users=[]
// const addUser=(userid,socketid)=>{
// !users.some(user=>user.userid===userid)  && 
// users.push({userid,socketid})

// console.log(users)
// }

// const removerUser=(socketid)=>{
//  const remove= users.filter(user=>user.socketid!=socketid)
//  console.log(remove)
//  console.log("remove")
//  return remove

// }

// const getUser=(userid)=>{
  
// const filter= users.filter(user=>user.userid==userid)
// console.log(filter)
// console.log("filtet")
// return filter
// }
//   io.on('connection', (socket) => {
//     const msgcollection=db.once("open",()=>{
//       console.log("connect to db")
//        const newmsgcooolection=db.collection("listchats")
//        const msglive=msgcollection.watch()
//        msglive.on("change",(change)=>{
//           if(change.operationType==="update"){
//             //  console.log(change)
//      const newmsgdocument=change.updateDescription.updatedFields;
//      const convvernewmsgdocument=(Object.values(newmsgdocument))[0]
//     //  console.log((Object.values(newmsgdocument))[0])
//      //   pusher.trigger("my-channel","update",{
//      var  idsender=convvernewmsgdocument.idsender
//      var  idreciver=convvernewmsgdocument.idreciver
//      var   time=convvernewmsgdocument.time
//      var  msg=convvernewmsgdocument.msg
//      //  })
//           }
//           else {console.log("error push")}
//        })
//       })
   
//      console.log("user connect")
//     socket.on("addUser",(userid)=>{
//       addUser(userid,socket.id);
//       io.emit("getUsers",users)
//     })

//     socket.on("sendmessage",({idsender,idreciver,time,msg})=>{
//       const userreciver=getUser(idreciver)
//     console.log("getuser")

//       console.log(userreciver)
//       io.to(userreciver.socketid).emit("getmessage",({
//         idsender:idsender,
//           idreciver:idreciver,
//           time:time,
//           msg:msg,}))         
          
//     })
//     socket.on("disconnect",()=>{
//       removerUser(socket.id)
//       console.log("user disconnect")
//       io.emit("getUsers",users)

//     })
  

//       // socket.to(socket.id).emit("welcome","ok")
//   })
//    }
//    socket.on("sendmessage",function(string){
//      console.log(string) 
//   socket.broadcast.emit("recivemessage","string")
//    })
//  });


 app.use("/",indexRouter)
app.use("/users",userRouter)
app.use("/dashbord",userdashbordRouter)
if (process.env.NODE_ENV) {
  app.use(express.static(path.resolve(process.cwd(), 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
  })
}


var server_port = process.env.YOUR_PORT || process.env.PORT || 4000;

// http.listen(server_port, () => {
//   console.log(`serer running`);
// });

app.listen(server_port,()=>console.log("running server "))
//  const io = require("socket.io").listen(4000);
//  io.on('connection', (socket) => {
//      console.log('a user connected');
//      socket.on('disconnect', () => {
//          console.log('user disconnected');
//        });
//    });
// const io = require("socket.io")(4000);
// io.on("connection",(socket) =>{console.log("user connected")})
//    app.listen(4000,(erro)=>{
//        console.log("server running")
//   })
