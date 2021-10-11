import "./Membercard.css"
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useState,useEffect} from "react"
    import moment from "moment";
    import axios from  "axios"
import { Button } from 'react-bootstrap';

    import { useSelector,useDispatch } from 'react-redux'
export default function Membercard({el}){
    const [loading,setLoading]=useState(true)

    const dispatch = useDispatch()   
const iduserdelte=el._id
const imageprofile=el.url  
  const removephoto=async(iduser,url)=>{

    const  body ={url,imageprofile};
      try {

        const res=await axios.patch(`/users/photo/${iduser}`,body)
        console.log(res.data)
      } catch (error) {
        console.log(error)

      }
            window.location.reload(false);
   }
   useEffect(()=>{
         document.title = "Photo users";
     setTimeout(()=> { setLoading(false)},3000);
     },[])
    return(   
      <div className="col-md-4">
      {loading ? <div className="l">
  <div className="lds-heart"><div></div></div>
  </div>
    //  <div className="l">
  // <div className="lds-heart"><div></div></div>
  // </div>
  :(
        <div className="p-card bg-white p-2 rounded px-3">
          <div className="d-flex align-items-center credits"><img src="https://i.imgur.com/hlz6G90.png" width="16px" /></div>

{ (el.photo.length >0) && 

<div className="PHOTODASHBORD" >{el.photo.map(photo=>(<div> <img className="imagemeber" src={photo.url}  />   
   
       
        <Button type="button" onClick={()=>removephoto(iduserdelte,photo.url)} >
            delete
        </Button>
       
      
      </div>)) }</div> }
      
          <div className="d-flex justify-content-between stats likes ">
            <div><i className="fa fa-calendar-o" /><span className="ml-2">{moment(el.createAt).fromNow()}</span></div>
            <div className="d-flex flex-row align-items-center">
            </div>
          </div>
        </div> )}
      </div>
   
  
    
    )
}