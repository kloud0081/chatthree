import "./Membercard.css"
import {Link} from 'react-router-dom';
import Modalconversation from "./Chat/Modalconversation"
import { useHistory } from "react-router-dom";
import {useState} from "react"
    import moment from "moment";
    import axios from  "axios"

    import { useSelector } from 'react-redux'
    import { useEffect } from 'react';

export default function Membercard({member,idprofile}){
  const [liked,setLiked]=useState(false)

  const x=useSelector(state=>state)
  useEffect(()=>{
    if  (((x.Auto.isAuto) && (x.Auto.user!==null))) { 
      var file =x.Auto.user._id  

      var remeberme=x.Auto.user.remeberme

     }
    //            try{    const res=await axios.get("/users/allusers");
    //         //    console.log(res.data)
    //            setinfoUsers(res.data.allusers)
    //         }
    //            catch(error){console.log(error)}              
              const   y=(member.likephoto).find(el=>el.id==file   )
if(y){
  setLiked(true)
}


           },[])

  //  if (x){setLiked(true)}
  const [inv,setInv]=useState(false)
  console.log(liked)

  if  (((x.Auto.isAuto) &&   (x.Auto.user!==null))) {    var firstnameuser =x.Auto.user.firstname  
  var etat=x.Auto.user.etat  }
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  let history = useHistory();


  const Likes=async()=>{ 
  const  body ={idphotolike:member._id,id:idprofile,url:member.url,name:firstnameuser,member:x.Auto.user.url}
  console.log(body)
    try {
      const res=await axios.post("/users/notification",body)
      console.log(res.data)

      setLiked(!liked)
    } catch (error) {
      console.log(error)
    }
  }

  const Added=async()=>{ 
    const  body ={idinv:member._id,id:idprofile,url:member.url,name:firstnameuser,member:x.Auto.user.url}
    console.log(body)
      try {
        const res=await axios.post("/addfriend",body)
        console.log(res.data)
        setInv(true)
      } catch (error) {
        console.log(error)
      }
    }
   
    return(   
    
      <div className="col-md-4">
        <div className="p-card bg-white p-2 rounded px-3">
          <div className="d-flex align-items-center credits"><img alt="member" src="https://i.imgur.com/hlz6G90.png" width="16px" /><span className="text-black-50 ml-2">{member.firstname} </span></div>
          <Link className="nav-link"  to={`/users/profile/${member._id}`}>

<img  alt="member" className="imagemeber" src={member.url}  />   </Link>
     <span className="badge badge-primary py-1 mb-2">Country:</span>&nbsp; {member.country} <span className="badge badge-primary py-1 mb-2">Age:&nbsp;{member.age}</span>
     
     <span className="d-block mb-5">Some kind of short descriptions can go here to better recommend tasks.</span>
  
          {/* <h5 className="mt-2">Increase confidence with trustpilot reviews</h5><span className="badge badge-primary py-1 mb-2">integrations</span><span className="d-block mb-5">Some kind of short descriptions can go here to better recommend tasks.</span> */}
          <div className="troisbutton">
          <Modalconversation show={show} setShow={setShow} handleClose={handleClose} idprofile={idprofile} idconversation={member._id} img={member.url} name={member.firstname}/>
  
        <button onClick={()=>{if(idprofile==null) {history.push("/users/login")} else {Likes();}}}  disabled={etat==="desactive"}  type="button" className="btn btn-primary btn-sm mr-1 mb-2 " 
          >
      {liked ?   <i class="fas fa-heart-broken"></i>  

      :<i className="far fa-heart" /> }    </button>



        <button type="button" disabled={etat==="desactive"} onClick={()=>{if(idprofile==null) {history.push("/users/login") } else handleShow()}} className="btn btn-light btn-sm mr-1 mb-2">
            <i className="fa fa-envelope"     />
        </button>


        <button type="button" disabled={etat==="desactive"}  onClick={()=>{if(idprofile==null) {history.push("/users/login") } else {Added()}}}  className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main " data-toggle="tooltip" data-placement="top" title="Add to wishlist">
       {inv ? "inv  sent": <i className="fas fa-user-plus"></i>}
        </button>
      </div>
          <div className="d-flex justify-content-between stats likes ">
            <div><i className="fa fa-calendar-o" /><span className="ml-2">{moment(member.createAt).fromNow()}</span></div>
            <div className="d-flex flex-row align-items-center">
              <div className="profiles">
    {member.likephoto.map(photolike=>(<img alt=" member" className="rounded-circle" src={photolike.member} width={30} />))}</div><span className="ml-3">{member.likephoto.length>0 && member.likephoto.length }</span>
           </div>
          </div>
        </div>
      </div>
   
     
    )
}