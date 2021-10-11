import "./message.css"
import Listchat from "./Listchatcard"
import Conversationcard from "./Conversationcard"
import {useEffect,useRef,useState} from "react"
import axios from 'axios';
import io from "socket.io-client"
import { useSelector } from 'react-redux'
export default function Message(){
  const [search,setSearch]=useState("")

  
  const scrollmessage=useRef()

    const [listchat,setListchat]=useState([])
console.log(listchat)
    const x=useSelector(state=>state)
// const rev=useRef(null)
//  if (rev.current!=null){console.log(rev.current.name)
//  }
const [msg,setMsg]=useState([])

    const iduser =x.Auto.user._id;
    // console.log(iduser)
    useEffect(()=>{document.title = "Messages";
    async function msg(){
    try{    const res=await axios.get(`/message/${iduser}`);
    setListchat(res.data.listconversation)
  
  }
    catch(error){console.log(error)}

}
msg()
}

,[msg])
const socket=useRef(io("ws://localhost:4000"))

const [newmsg,setNewmsg]=useState(0)
const [openconversation,setOpenconversation]=useState(false)

useEffect(()=>{ 
 
                     socket.current=io("ws://localhost:4000")

                     socket.current.on("getmessage",(data)=>{
                       console.log(data)
                     })

   },[])
 useEffect(()=>{ 
socket.current.emit("addUser",iduser)
socket.current.on("getUsers",(users)=>{
console.log(users)
})  // channel.bind('update', function(data) {
    // console.log(data)
   //   // console.log(JSON.parse([...data.message]))
             //  setMsg([...data.message])
   
              // msg.push(data)
                   
 },[x])

 useEffect(()=>{ 
  scrollmessage.current&& scrollmessage.current.scrollIntoView({behavior: "smooth"})
                     
   },[msg])

// console.log(msg)
const [idanother, setIdanother]=useState(null)
const [index,setIndex]=useState(null)
const another=(tableau,i)=>{
  setIndex(i);

  if (tableau[0]===iduser){
    setIdanother(tableau[1]);console.log("meme");console.log(iduser)

  }
  else{   setIdanother(tableau[0]);console.log("different")
  }
}

    const [textarea,setTextarea]=useState("")
    const Send=async()=>{

       socket.current.emit("sendmessage",({idsender:iduser,idreciver:idanother,time:Date.now(),msg:textarea}))

      try{
        const res=await axios.post("/message",{idsender1:iduser,idreciver1:idanother,textarea:textarea,listchat:[{idsender1:iduser,idreciver1:idanother,msg:textarea}]})
          //  console.log(res.data.result.msg)
//            channel.bind('update', function(data) {
//              console.log(data)
//             //   // console.log(JSON.parse([...data.message]))
//                       //  setMsg([...data.message])

//                        setMsg([...msg,data])
// // console.log(data.message.idsender)            
//                   });
          setMsg([...msg,...res.data.result.msg])



      }
      catch(error){console.log(error)}
       setTimeout(function(){
         setNewmsg(newmsg+1)
      
       }, 3000);
    
      setTextarea("")
    }
      // console.log(msg)
//  console.log(listchat.msg)
    return(<div className="MSG">

<div className="container">
          {/* Page header start */}
          <div className="page-title">
            <div className="row gutters">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h5 className="title">Chat App</h5>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
            </div>
          </div>
          {/* Page header end */}
          {/* Content wrapper start */}
          <div className="content-wrapper">
            {/* Row start */}
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card m-0">
                  {/* Row start */}
                  <div className="row no-gutters widthgutter">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                      <div className="users-container">
                        <div className="chat-search-box">
                          <div className="input-group">
                            <input className="form-control" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-info">
                                <i className="fa fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <ul className="users">
                             {listchat.filter(el=>el.reciver.toLowerCase().includes(search))
.map((list,i)=>(<div key={list._id}  i={i}  onClick={()=>{setMsg(list.msg);another(listchat[i].listchat,i);setOpenconversation(true)}}><Listchat   iduser={iduser} list={list} /></div>))} 
                            
                        
                          {/* <li className="person active-user" data-chat="person2">
                            <div className="user">
                              <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Retail Admin" />
                              <span className="status away" />
                            </div>
                            <p className="name-time">
                              <span className="name">Peter Gregor</span>
                              <span className="time">12/02/2019</span>
                            </p>
                          </li> */}
                   
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                      <div className="selected-user">
                        {/* <span>To: <span className="name">Emily Russell</span></span> */}
                      </div>
                      <div className="chat-container">
                        <ul className="chat-box chatContainerScroll">
                          
                        { msg.map(el=>( <Conversationcard el={el} />))}
                    
                        </ul>                     
                             {openconversation ?  

                        (<div className="form-group mt-3 mb-0">
                          <textarea ref={scrollmessage} name="message" className="form-control" rows={3} placeholder="Type your message here..." value={textarea} onChange={(e)=>setTextarea(e.target.value)} />
                           <button class="btn btn-warning btn-sm" id="btn-chat" onClick={()=>Send()}>
                                Send</button> 

                                
                        </div>): "start conversation" }
                        
                      </div>
                    </div>
                  </div>
                  {/* Row end */}
                </div>
              </div>
            </div>
            {/* Row end */}
          </div>
          {/* Content wrapper end */}
        </div>
        </div>
    )
}