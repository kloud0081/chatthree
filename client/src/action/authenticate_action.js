import {getuser_success,numberphoto,notification_success,logout_success,update_error,update_success,login_success,login_error,signup_success,signup_error} from "./constante"
import {notificationdashbord_success,logoutdashbord_success,updatedashbord_error,updatedashbord_success,logindashbord_success,logindashbord_error} from "./constante"

import axios from "axios"
 
export const getUser=()=>async(dispatch)=>{
    const token=localStorage.getItem("token");

    const config = { headers: { Authorization: `Bearer ${token}` } };
  
    try {
        const res=await axios.get("/getuser",config)
        dispatch({type:getuser_success,payload:res.data})

    } catch (error) {
        console.log(error)
    }
}


export const Loginaction=(email,password)=>async(dispatch)=>{
    const body={email,password}
    try{ 
    const res=await axios.post("/users/login",body)
    dispatch({type:login_success,payload:res.data})
    console.log(res.data)
    }
    catch(error){
        console.log(error)
        dispatch({type:login_error,payload:error.response.data})
    }
} 
export  const Signupaction=(firstname,lastname,email,password)=>async (dispatch)=>{
     const body=({firstname:firstname,lastname:lastname,email:email,password:password})
    //  const config={
    //     Headers:{"Content-Type":"application/json"}

    // };
        try {
     const  res=await  axios.post("/users/signup",body)
     console.log(res.data)
dispatch({type:signup_success,payload:res.data})
    } catch (error) {
        console.log(error.response)
        dispatch({type:signup_error})

    }
}

export  const Numberphotoaction=(idprofile)=>async (dispatch)=>{
    console.log(idprofile)
    
    try {
        const response=await   axios.get(`/users/profile/${idprofile}`)
  dispatch({type:numberphoto,payload:response.data.profile.photo.length})
     console.log(response.data.profile.photo)
  
    } catch (error) {
     console.log(error)
   
    }
    
}



export  const Updatecountryandageaction=(id,country,age)=>async (dispatch)=>{

         const token=localStorage.getItem("token");


     const config = { headers: { Authorization: `Bearer ${token}` } };
    const body=({country,age})
    try{const  res=await axios.patch(`/users/profileageandcountry/${id}`,body,config)
    console.log(res.data)
    dispatch({type:update_success,payload:res.data})
    }
    catch(error){
         dispatch({type:update_error,payload:error.response.data})
    }}  



export  const Updateaction=(id,firstname,lastname,email,password,twitter,facebook,linkedin,skype,instagram,url)=>async (dispatch)=>{

         const token=localStorage.getItem("token");


     const config = { headers: { Authorization: `Bearer ${token}` } };
    const body=({firstname:firstname,lastname:lastname,email:email,password:password,twitter,facebook,linkedin,skype,instagram,url})
    try{const  res=await axios.patch(`/users/profile/${id}`,body,config)
    console.log(res.data)
    dispatch({type:update_success,payload:res.data})
    }
    catch(error){
         dispatch({type:update_error,payload:error.response.data})
    }}  
    export  const Notificationaction=(id)=>async (dispatch)=>{
        try{const  res=await axios.get(`/users/notification/${id}`)
        console.log(id)
        dispatch({type:notification_success,payload:res.data.userslikedphoto[0].idsenders})
        }
        catch(error){
             dispatch({type:update_error,payload:error.response.data})
        }}  
    
    export const Logout=()=>{return  {    type:logout_success}}



    export const Logindashbordaction=(email,password)=>async(dispatch)=>{
        const body={email,password}
        try{ 
        const res=await axios.post("/dashbord/logindashbord",body)
        dispatch({type:logindashbord_success,payload:res.data})
        console.log(res)
        }
        catch(error){
            console.log(error)
            dispatch({type:logindashbord_error,payload:error.response.data})
        }
    } 
  
    export  const Updatedashbordaction=(id,firstname,lastname,email,password,url)=>async (dispatch)=>{
        const body=({firstname:firstname,lastname:lastname,email:email,password:password,url:url})
        try{const  res=await axios.patch(`/dashbord/profiledashbord/${id}`,body)
        dispatch({type:updatedashbord_success,payload:res.data})
        }
        catch(error){
             dispatch({type:updatedashbord_error,payload:error.response.data})
        }}  
        export  const Notificationactiondashbord=(id)=>async (dispatch)=>{
            try{const  res=await axios.get(`/dashbord/notificationdashbord/${id}`)
            console.log(id)
            dispatch({type:notificationdashbord_success,payload:res.data.userslikedphoto[0].idsenders})
            }
            catch(error){
                 dispatch({type:updatedashbord_error,payload:error.response.data})
            }}  
        
        export const Logoutdashbord=()=>{return  {    type:logoutdashbord_success}}