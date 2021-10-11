import {useEffect,useState} from "react"
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import moment from "moment";
import {Link} from 'react-router-dom';

export default function Invitationcard(){
  const dispatch = useDispatch()
// console.log(userliked)
  const x=useSelector(state=>state)
  const iduser =x.Auto.user._id;
  const [listinvtation,setUserinv]=useState([])
  const [newrender,setNewrender]=useState(true)
     useEffect(()=>{
        async function getnotificationv(){

        if  (((x.Auto.isAuto) && (x.Auto.user!==null))) { 
     try{    
        const res=await   axios.get(`/friends/${x.Auto.user._id  }`)
        setUserinv(res.data.listfriends[0].idsenders)
       }
           catch(error){console.log(error)
           }
           }
        }
           getnotificationv()
 },[])


const Remove=async(iduserremoved)=>{

  try {
    const res=await axios.patch(`/friends/${iduser}`,{iduserremoved})
console.log(res.data)
// setNewrender(false)

  } catch (error) {console.log(error)
    
  }
//   setNewrender(false)

}
console.log(newrender)

    return(      
       <>
{listinvtation.map(el=>(
       <li className="col-md-6" key={el._id}>
       <div className="img">
         <img src={el.member} className="img-responsive" alt="" />
       </div>
       <div className="details">
         <div className="name">
           <a href="#">{el.name}</a>
         </div>
         {/* <div className="time online">
           <i className="fa fa-check-circle" /> Online
         </div> */}
       </div>
       <button type="button"  onClick={()=>{Remove(el.id)}}>
              {/* <span aria-hidden="true" onClick={()=>Remove(el.id),dispatch(Notificationaction(iduser))} ><i className="material-icons">clear</i></span> */}
              {/* <span aria-hidden="true" key={el.id}  > */}
                  <i className="material-icons">clear</i>
                  {/* </span> */}

            </button>
     </li>  
))}
   </> )
}