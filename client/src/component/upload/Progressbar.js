import { useEffect, useState } from 'react';
import  useStorage from "../../hooks/useStorage"
import {ProgressBar} from "react-bootstrap"
import axios from 'axios';
import {Numberphotoaction}  from "../../action/authenticate_action"
import { useDispatch,useSelector } from 'react-redux'

export default function Progressbar({file,setFile,setUpload}){
    const dispatch = useDispatch()

const {url,progress}=useStorage(file) 
const x=useSelector(state=>state)
const iduser =x.Auto.user._id;
useEffect(async()=>{
  if (url){ 
     try{    const res=await axios.post("/users/updatephoto",{id:iduser,url:url});
     console.log(res.data)
  }
     catch(error){console.log(error)}
setFile(null)

dispatch(Numberphotoaction(x.Auto.user._id ))
        
    }
   if (progress==100) {setTimeout(()=> { setUpload(true);},2000)}
},[url,progress])
    return(<div>
<div class="progress">
<ProgressBar now={progress} label={`${progress}%`} />;</div>

       </div> 
    )
}