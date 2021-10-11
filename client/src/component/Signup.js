import  "./signup.css"
import {Formik} from "formik"
import { useDispatch,useSelector } from 'react-redux'
import * as Yup from "yup"
import { useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
  import {Signupaction} from "../action/authenticate_action" 
  import Upload from "./upload/Upload"
  import { useTranslation } from "react-i18next";

   import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Signup(){
  const [photo,setPhoto]=useState("")
    const notify = () => toast("Wow so easy!");
    const { t, i18n } = useTranslation();

  const x=useSelector(state=>state)

         let history = useHistory();

        useEffect(async()=>{
          document.title = "Sign up";
        
        },[])
const [remeberme,setRemember]=useState(false)
 const msg=x.Auto.msg
 
 const dispatch = useDispatch()

         const SignupSchema=Yup.object({
                 firstname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
                 lastname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
                 email:Yup.string().email("Invalid Email ").required("Required"),
                 password:Yup.string().min(8,"Must be at least 8 characters").required("Required"),
                 confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
                 .required('Password confirmation is required!'),
         })

    return(<div className="bgsignup subscribebox"><Formik initialValues={{firstname:"",lastname:"",email:"",password:"",confirmpassword:"",}}  validationSchema={SignupSchema} onSubmit={ values=>{
            notify();
             dispatch(Signupaction(values.firstname,values.lastname,values.email,values.password,{remeberme}))
  

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
       }) => (
        <div>
       {(msg==="user already added") && (<div className="alert alert-danger" role="alert">
        User already registred
</div>) }       

  {/* {(x.Auto.user!==null && history.location.pathname=="/users/signup")  &&    <Redirect to='/users/profile'  />}   */}

<div className="container-fluid ps-md-0 subscribebox">
        <div className="row g-0">
        {/* <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />  */}
        <div className="singles d-md-flex col-md-4 col-lg-6 flex flex-wrap backgroun">
        <div className="textspan"><h2>{t("awayy")}</h2></div>
                   <div className="singleimg">     <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/7767290.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/4029541.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/7767258.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/3900914.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930872.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/3798993.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930761.jpg"/>
                    
                        <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/3456404.jpg"/>
                    
                        {/* <img src="https://cdn.russiancupid.com/memphoto/Photo1/small/6930126.jpg"/> */}
                    </div>
                </div>  
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto backgroun">
                    {/* <h3 className="login-heading mb-4">Sign up</h3> */}
                    <div className="title">{t("welcome")}</div>
                    {history.location.pathname=="/" && (<><div className="subtitle">Let's create your account!</div></>)}
                 { (msg==="ok") ? (  <Upload/> )  :( <form onSubmit={handleSubmit}>

                      <div className="form-floating mb-3">
                      <div className="input-group mb-3">

                      <div className="loginandpasssword">

<div>
            <span className="input-group-text"><i className="fas fa-info-circle"></i></span>
          </div>        
                       <input
             type="text"
             name="firstname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstname}
             placeholder={t("firstname")}
           /></div></div>
     <span className="error">      {errors.firstname && touched.firstname && errors.firstname}</span>
                      </div>
                      <div className="form-floating mb-3">
                      <div className="input-group mb-3">

<div className="loginandpasssword">

<div>
<span className="input-group-text"><i className="fas fa-info-circle"></i></span>
</div>                         <input
             type="text"
             name="lastname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastname}
             placeholder={t("lastname")}

           /></div></div>
                <span className="error">      {errors.lastname && touched.lastname && errors.lastname}</span>

                      </div>
                      <div className="form-floating mb-3">
                      <div className="input-group mb-3">

<div className="loginandpasssword">

<div>
<span className="input-group-text"><i className="fas fa-user" ></i></span>
</div>                         <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="Email"

           /></div></div>
                <span className="error">      {errors.email && touched.email && errors.email}</span>
                      </div>
                      <div className="form-floating mb-3">
                      <div className="input-group mb-3">

<div className="loginandpasssword">

<div>
<span className="input-group-text"><i class="fas fa-key"></i></span>
</div>                         <input
                                     placeholder={t("password")}

             type="password" 
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /></div></div>
                <span className="error">      {errors.password && touched.password && errors.password}</span>
                      </div>
                      <div className="form-floating mb-3">
                      <div className="input-group mb-3">

<div className="loginandpasssword">

<div>
<span className="input-group-text"><i class="fas fa-key"></i></span>
</div> 
                        <input
                                     placeholder={t("confirmpassword")}

             type="password"
             name="confirmpassword"
             onChange={handleChange}
             onBlur={handleBlur}
              value={values.confirmpassword}
           /></div></div>
                <span className="error">      {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</span>
                      </div>
                      {/* <div className="form-group">
                    <div className="custom-control custom-checkbox"> */}
                      {/* <input type="checkbox" className="custom-control-input" id="customControlInline" onClick={()=>dispatch(Remembermeaction())} /> */}
                      
                      {/* <input 
                      
                      name="rememberme"
             onChange={()=>setRemember(!remeberme)}
             onBlur={handleBlur}
             value={remeberme}
                      type="checkbox" className="custom-control-input" id="customControlInline" /> */}

                      {/* <label className="custom-control-label" htmlFor="customControlInline">Remember me</label> */}
                    {/* </div> */}
                  {/* </div> */}
                  
                      <div className="d-grid signupbutton">
                        <button title="Signup to chat.com" className="btn btn-primary btnsignup text-uppercase fw-bold mb-2" type="submit"  disabled={!(isValid && dirty)} >{t("signup")}</button>
                        <div className="text-center">
        
        {/* <a className="small" href="#">Forgot p?</a>  */}
                        </div>
                      </div>
                                                 </form> )}  

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