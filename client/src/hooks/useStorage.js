import { useState,useEffect } from "react";
import {projectStorage,projectFirestore} from "../firebase/config"
import { useSelector } from 'react-redux'
import  useFirestore from "./useFirestore"

export default function useStorage(file){
    const x=useSelector(state=>state)

const firstname=x.Auto.user.firstname
    const [progress,setPercentage]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)

    const {docs}=useFirestore("members")
    console.log(docs)
    const id=x.Auto.user._id
    const number=(docs.filter(el=>el.id==id)).length
    console.log(number)
    useEffect(()=>{
        const storageRef=projectStorage.ref(file.name)
        // const fireStoreRef=projectFirestore.collection(`${id}`)
        const fireStoreRef=projectFirestore.collection("members")
  
        storageRef.put(file).on("state_changed",(snap)=>{
            const percentage=(snap.bytesTransferred/snap.totalBytes)*100
            setPercentage(percentage);}
            ,(err)=>{setError(err)}
            ,async()=>{
 {const url=await storageRef.getDownloadURL();setUrl(url);fireStoreRef.add({url,createdAt:Date.now(),id:id,firstname:firstname}) }  

        }
    
    )
    },[file])
    // console.log(url)
    // console.log(progress)
    // console.log(error)

    return {url,progress,error}
}