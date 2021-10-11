import * as Yup from "yup"
import  "./login.css"
import { Formik } from 'formik';
import  { Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import {Loginaction} from "../action/authenticate_action" 
import { useTranslation } from "react-i18next";

export default function Login(){
  const [remeberme,setRemember]=useState(false)
  const { t, i18n } = useTranslation();

    useEffect(()=>{    document.title = "Login";},[])  

    let history = useHistory();
      const dispatch = useDispatch()
 const x=useSelector(state=>state)
 const msg=x.Auto.msg  
const SignupSchema=Yup.object({
    email:Yup.string().email("Invalid Email ").required("Required"),
    password:Yup.string().min(8,"Must be at least 8 characters").required("Required"),
})

return(<div className=" subscribebox"><Formik initialValues={{email:"",password:""}}  validationSchema={SignupSchema} onSubmit={async(values)=> 
{ 
   dispatch(Loginaction(values.email,values.password,{remeberme}));
    
  }
   }>  
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

 {(msg==="wrong password") && (<div className="alert alert-danger" role="alert">
wrong password
</div>) }   


{/* <img  src={("/logo192.png")}/>  */}

   {/* <img  src={`${getfile.filepath}`}/>   */}

 {(msg==="wrong user") && (<div className="alert alert-danger" role="alert">
user not found
</div>) }   
{/* <ToastContainer />  */}
 {/* {(x.Auto.user!==null) && notify() }   */}
 {  (x.Auto.user!=null)  &&    <Redirect to={`/users/profile/${x.Auto.user._id}`}  />}   
<div className="container-fluid ps-md-0">
<div className="row g-0">

        {/* <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />  */}
        <div className="singles d-md-flex col-md-4 col-lg-6 flex flex-wrap backgroun">

<div className="textspan"><h2>{t("awayy")}</h2></div>
                   <div className="singleimg">     <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/7767290.jpg"/>
                    
                        <img alt="love"  src="https://cdn.russiancupid.com/memphoto/Photo1/small/4029541.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/7767258.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/3900914.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930872.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/3798993.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930761.jpg"/>
                    
                        <img alt="love" src="https://cdn.russiancupid.com/memphoto/Photo1/small/3456404.jpg"/>
                    
                        {/* <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930126.jpg"/> */}
                    </div>
                    </div>
                    
<div className="col-md-8 col-lg-6">
<div className="login d-flex align-items-center py-5">
<div className="container">
  <div className="row">
    <div className="col-md-9 col-lg-8 mx-auto backgroun">
      
      {/* <h3 className="login-heading mb-4">Welcome back!</h3> */}
      <div className="subtitle">{t("welcome")}</div>
      <form onSubmit={handleSubmit}>
     
        <div NameName="form-floating mb-3">
            
        <div className="input-group mb-3">

            <div className="loginandpasssword">

<div>
            <span className="input-group-text"><i className="fas fa-user" ></i></span>
          </div>          

        <input
                     placeholder="Email"

             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /></div></div>
      <span className="error">    {errors.email && touched.email && errors.email} </span> 

        </div>
        <div className="form-floating mb-3">
        <div className="loginandpasssword">

          <div className="">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>          
          <div>
           <input
                                     placeholder={t("password")}

             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /></div></div>
       <span className="error">   {errors.password && touched.password && errors.password}</span> 
        </div>

<div className="form-group">
<div className="custom-control custom-checkbox"> 
                      
                       {/* <input 
                      
                      name="rememberme"
             onChange={()=>setRemember(!remeberme)}
             onBlur={handleBlur}
             value={remeberme}
                      type="checkbox" className="custom-control-input" id="customControlInline" />  */}

                       {/* <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>  */}
                     </div>      
                  </div>

        <div className="d-grid signupbutton">
          <button className="btn btn-primary btnlogi text-uppercase fw-bold mb-2" title="Login to chat.com"   type="submit" disabled={!(isValid && dirty)}>{t("login")} </button>
                 
        </div>
                                   </form> 
                                   <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  {t("los")}? <a href="/users/signup" className="ml-2">{t("signup")}</a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="/">{t("forgot")}?</a>
                </div>
              </div>

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