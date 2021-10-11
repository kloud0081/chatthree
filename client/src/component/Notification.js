import {useEffect,useState} from "react"
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import moment from "moment";
import {Link} from 'react-router-dom';

export default function Notification(){
  const dispatch = useDispatch()
// console.log(userliked)
  const x=useSelector(state=>state)
  const iduser =x.Auto.user._id;
  const [userliked,setUserlikeed]=useState([])

     useEffect(()=>{document.title = "Notification";
        async function getnotificationv(){

        if  (((x.Auto.isAuto) && (x.Auto.user!==null))) { 

     try{    
        const res=await   axios.get(`/users/notification/${x.Auto.user._id  }`)
        setUserlikeed(res.data.userslikedphoto[0].idsenders)
       console.log(res.data.userslikedphoto[0].idsenders.length)
       }
           catch(error){console.log(error)
           }
           }}
           getnotificationv()
 },[])

const Remove=async(iduserremoved)=>{
  try {
    const res=await axios.patch(`/users/notification/${iduser}`,{iduserremoved})
console.log(res.data)
  } catch (error) {console.log(error)
    
  }
}
    return(<div className="NOTIFICATION">
                <div className="container mt-5">
          <div className="title">
            <h3>Notifications</h3>
          </div>
        </div>
       
{userliked.map(el=>(
        <div className="alert alert-primary" key={el._id}>
          <div className="container">
            <div className="alert-icon" >
              <i className="material-icons"><img src=""/></i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              {/* <span aria-hidden="true" onClick={()=>Remove(el.id),dispatch(Notificationaction(iduser))} ><i className="material-icons">clear</i></span> */}
              <span aria-hidden="true" key={el.id} onClick={()=>Remove(el.id)} ><i className="material-icons">clear</i></span>

            </button>
            <Link className="nav-link"  to={`/users/profile/${el.id}`}> <b>{moment(el.time).fromNow()}</b> you have new like from {el.name}  </Link>   

          </div>
        </div>
))}
       </div> 
    )
}