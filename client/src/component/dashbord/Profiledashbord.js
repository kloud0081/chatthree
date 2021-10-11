import {Formik} from "formik"
//  import './profile.css';
import { useEffect,useState } from 'react';
// import Photousers from "./upload/Photousers"
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { useDispatch,useSelector } from 'react-redux'
import * as Yup from "yup"
   import {Updatedashbordaction} from "../../action/authenticate_action" 
  
export default function Profile(){ 
  const [loading,setLoading]=useState(true)
  const dashbordreducers=useSelector(state=>state)
  if  (((dashbordreducers.Autodashbord.isAuto) && (dashbordreducers.Autodashbord.user!==null))) { 
    var  idprofiledashbord =dashbordreducers.Autodashbord.user._id
    
    var dashbordfirstnameprofile=dashbordreducers.Autodashbord.user.firstname;
    var dashbordlastnameprofile=dashbordreducers.Autodashbord.user.lastname;
    var dashbordemailprofile=dashbordreducers.Autodashbord.user.email   }

   
   
    useEffect(()=>{

      document.title = "Profile dashbord";},[]) 
  
      let history = useHistory();
  const dispatch = useDispatch()
              //  const x= localStorage.getItem('token')
    const msg=dashbordreducers.Autodashbord.msg
        const UpdateSchema=Yup.object({
          firstname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
          lastname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
          email:Yup.string().email("Invalid Email ").required("Required"),
          password:Yup.string().min(8,"Must be at least 8 characters").required("Required"),
  })
    
  return(<div className="profildashb">
  
  <Formik initialValues={{firstname:dashbordfirstnameprofile,lastname:dashbordlastnameprofile,email:dashbordemailprofile,password:"00000000",confirmpassword:""}}  validationSchema={UpdateSchema} onSubmit={ values=>{
    dispatch(Updatedashbordaction(idprofiledashbord,values.firstname,values.lastname,values.email,values.password))

   }}>
{({
values,
errors,
touched,
handleChange,
handleBlur,
handleSubmit,
dirty,
isValid,
/* and other goodies */
}) => (
<div>
{(dashbordreducers.Autodashbord.msg==="user is updatet") && (<div className="alert alert-success" role="alert"> 
 User is updatet 
</div>) }      

{/* {(x.Auto.user!==null && history.location.pathname=="/users/signup")  &&    <Redirect to='/users/profile'  />}   */}

<div className="container-fluid ps-md-0">
<div className="row g-0">
<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" /> 
 <div className="col-md-8 col-lg-6">
   <div className="login d-flex align-items-center py-5">
     <div className="container">
       <div className="row">
         <div className="col-md-9 col-lg-8 mx-auto">
           <h3 className="login-heading mb-4">Profile</h3>

       <form onSubmit={handleSubmit}>

             <div className="form-floating mb-3">

               <label htmlFor="floatingInput" >First name : </label>
  <input
    type="text"
    name="firstname"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.firstname}
  />
<span className="error">      {errors.firstname && touched.firstname && errors.firstname}</span>
             </div>
             <div className="form-floating mb-3">
               <label htmlFor="floatingInput" >Last name : </label>
               <input
    type="text"
    name="lastname"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.lastname}
  />
       <span className="error">      {errors.lastname && touched.lastname && errors.lastname}</span>

             </div>
             <div className="form-floating mb-3">
               <label htmlFor="floatingInput">Email : </label>
               <input
    type="email"
    name="email"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}
  />
       <span className="error">      {errors.email && touched.email && errors.email}</span>
             </div>
             <div className="form-floating mb-3">
               <label htmlFor="floatingPassword">Password :</label>
               <input
    type="password"
    name="password"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.password}
  />
       <span className="error">      {errors.password && touched.password && errors.password}</span>
             </div>
         
             
             {/* <div className="form-check mb-3">
               <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
               <label className="form-check-label" htmlFor="rememberPasswordCheck">
                 Remember password
               </label>
             </div> */}
             <div className="d-grid signupbutton">
               <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit"  disabled={!(isValid && dirty)} >Update</button>
               <div className="text-center">
               {/* {(history.location.pathname=="/users/signup") &&  


<a className="small" href="#">Forgot password?</a> } */}
               </div>
             </div>
                                        </form> 

         </div>

       </div>
     </div>
   </div>
 </div>
</div>
</div>
</div>)
}
</Formik></div>)
}
    