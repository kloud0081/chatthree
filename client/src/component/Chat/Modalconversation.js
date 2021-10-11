import { Modal,Button } from 'react-bootstrap';
import  './modalconversation.css';
import {useState} from "react"
import axios from 'axios';

export default function Modalconvertion({show,handleClose,idconversation,idprofile,img,name}){
  const [textarea,setTextarea]=useState("")
 const [sentok,setSentok]=useState(true)
  
 const Send=async()=>{
  try{
    const res=await axios.post("/message",{name,idsender1:idprofile,idreciver1:idconversation,textarea:textarea,listchat:[{idsender1:idprofile,idreciver1:idconversation,msg:textarea}]})
    console.log(res.data)
    if ( (res.data.save==="savednew") ||   (res.data.msg==="updatet") ){
      setSentok(false)
       setTimeout(function () {
        setSentok(true)

    }, 2000);
  
    } 
  }
  catch(error){console.log(error)}
}

    return(<div>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
 <Modal.Title> <img className="imgmsg" src={img} alt="msg"/> <span className="span1msg"> TO:</span><span className="span2msg">{name}</span>
        </Modal.Title>        </Modal.Header>
        <Modal.Body>
        {sentok ?
          (<div className="form-group px-3">
             <textarea className="form-control " rows={5} placeholder="Type your message" onChange={(e)=>setTextarea(e.target.value)} /> 
        </div>) : 


          (
<div className="success-animation">
<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>

          )}
      
      </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>Send()}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    
       </div> 
    )
}