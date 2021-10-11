import {useEffect,useState} from "react"
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import { useSelector } from 'react-redux'
export default function Conversationcard({el}){
  const x=useSelector(state=>state)
    const [anotheruser,setAnotheruser]=useState({url:""})

      const iduser =x.Auto.user._id
      useEffect(()=>{async function getConv(){if (iduser!==el.idsender){ 
        const response=await   axios.get(`/users/profile/${el.idsender}`)
       try {
        setAnotheruser(response.data.profile);
        // console.log(response.data)
       } catch (error) {
        console.log(error)
       }     }
       getConv()
      //  ;setTimeout(()=> { setLoading(false)},2000)
      }},[])
      // console.log(anotheruser)
            // console.log(el)

    return(<>
                                        {(iduser===el.idsender) && 

      (<li className="chat-left">

                            <div className="chat-avatar">
                            <Link className="nav-link"  to={`/users/profile/${iduser}`}>

                              <img src={x.Auto.user.url} alt="Retail Admin" /></Link>
                              <div className="chat-name">{x.Auto.user.firstname}</div>
                            </div>
                           (<div className="chat-text">                      {el.msg}
                              
                              </div> 
                            <div className="chat-hour">{moment(el.time).fromNow()} <span className="fa fa-check-circle" /></div>
                          </li>)}
                          {(iduser!==el.idsender) && 

                          <li className="chat-right">
                            <div className="chat-hour">{moment(el.time).fromNow()} <span className="fa fa-check-circle" /></div>
                             <div className="chat-text">{el.msg}

                              <br /> 
                              </div>
                            <div className="chat-avatar">
                            <Link className="nav-link"  to={`/users/profile/${el.idsender}`}>
                              <img src={anotheruser.url} alt="Retail Admin" /></Link>
                              <div className="chat-name">{anotheruser.firstname}</div>
                            </div>
                          </li>}
       </> 
    )
}