import {projectFirestore} from "../firebase/config"
import { useState,useEffect } from "react";

export default function useFirestore(collection){
const [docs,setDoc]=useState([])
 
useEffect(()=>{

    projectFirestore.collection(collection)
    .onSnapshot((snap)=>{
        let documents=[];
        console.log(snap.data)
        snap.forEach(doc=>{documents.push({...doc.data(),idphoto:doc.id});
    });
        setDoc(documents);
            })
            

},[collection])
    
    return {docs}
}