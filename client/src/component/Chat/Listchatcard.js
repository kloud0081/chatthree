
import {useEffect,useState} from "react"
import axios from 'axios';

export default function Listchat({list,iduser}){
  const [anotheruser,setAnotheruser]=useState({firstname:"",url:""})
  useEffect(()=>{async function getlistchat(){
  const another=list.listchat.find(el=>el!==iduser);
  const response=await   axios.get(`/users/profile/${another}`)
 try {
  setAnotheruser(response.data.profile);
 } catch (error) {
  console.log(error)
 }    
 } ;getlistchat()
//  ;setTimeout(()=> { setLoading(false)},2000)
},[])


    return(<>
         <li className="person" data-chat="person1">
                            <div className="user">
                                <img src={anotheruser &&  anotheruser.url } alt="Retail Admin" />  
                              <span className="status busy" />
                            </div>
                            <p className="name-time">
                             <span className="name">{anotheruser &&  anotheruser.firstname}</span> 
                              <span className="time">&nbsp;{list &&  (list.timestart).slice(0,10)}</span>
                            </p>
                          </li>
       </> 
    )
}