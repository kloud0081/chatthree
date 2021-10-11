import "./profile.css"
import {Formik} from "formik"
import { useEffect,useState } from 'react';
import axios from 'axios';
import Invitationcard from "./Invitationcard"
import { useTranslation } from "react-i18next";

import { useHistory } from "react-router-dom";
import Modalconversation from "./Chat/Modalconversation"
import { useDispatch,useSelector } from 'react-redux'
import * as Yup from "yup"
   import {Updateaction} from "../action/authenticate_action" 
   import Gallery from "./Gallery"
import Modalmsgprofile from "./Modalmsgprofile"
    import moment from "moment";
export default function Profile(){
  const { t, i18n } = useTranslation();

    const [profile,setprofile]=useState({})
  const [loading,setLoading]=useState(false)
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [showt, setShowt] = useState(false);
   const handleCloset = () => setShowt(false);
   const handleShowt = () => setShowt(true);
let history = useHistory();
const profilebwroser=history.location.pathname.slice(15,39);
if (profilebwroser==idprofile){
   var firstnameprofile=x.Auto.user.firstname;
   var lastnameprofile=x.Auto.user.lastname;
  var emailprofile=x.Auto.user.email;
  var twitterprofile=x.Auto.user.twitter;
  var facebookprofile=x.Auto.user.facebook;
  var linkedinprofile=x.Auto.user.linkedin;
  var instagramprofile=x.Auto.user.instagram;
  var skypeprofile=x.Auto.user.skype;
  var imageprofile=x.Auto.user.url
  var countryprofile=x.Auto.user.country
}
  else if (profilebwroser!==idprofile)

  {  
    var firstnameprofile=profile.firstname;
    var lastnameprofile=profile.lastname;
    var emailprofile=profile.email;
    var imageprofile=profile.url
  var twitterprofile=profile.twitter;
      var facebookprofile=profile.facebook;
      var linkedinprofile=profile.linkedin;
      var skypeprofile=profile.skype;
  var instagramprofile=profile.instagram;
  
  }
  
  useEffect(async()=>{
   if(countryprofile==""){ handleShowt() }
    document.title = "Profile";
 const response=await   axios.get(`/users/profile/${history.location.pathname.slice(15,39)}`)
 try {
  setprofile(response.data.profile)

 } catch (error) {
  console.log(error)

 }     ;setTimeout(()=> { setLoading(true)},2000)
    
  },[]) 
      
  const Signaler=async()=>{ 
  const  body ={id:profilebwroser,iduser:idprofile}
    try {
      const res=await axios.post("/users/signalisation",body)
    } catch (error) {
      console.log(error)
    }
    setTimeout(()=> { setLoading(false)},1000);
  }
      const x=useSelector(state=>state)

      var idprofile =x.Auto.user._id

  const dispatch = useDispatch()
  
      const msg=x.Auto.msg
       console.log(x.Auto.user.friends)

      console.log(x.Auto.user.age)
        const UpdateSchema=Yup.object({
          firstname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
          lastname:Yup.string().max(15,"Must be 15 characters or less").required("Required"),
          email:Yup.string().email("Invalid Email ").required("Required"),
          password:Yup.string().min(8,"Must be at least 8 characters").required("Required"),
          twitter:Yup.string(),linkedin:Yup.string(),facebook:Yup.string(),skype:Yup.string(),instagram:Yup.string(),
  })
    return(   <div className="profile">{ loading? 

          <div className="container bootstrap snippets bootdeys">
          <div className="row prof" id="user-profile">
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="main-box clearfix">
                <h2>{firstnameprofile} {lastnameprofile}</h2>
                <div className="profile-status">
                  <i className="fa fa-check-circle" /> Online
                </div>
                <img src={imageprofile} alt="" className="profile-img img-responsive center-block imageprofile" />
                <div className="profile-label">
                  <span className="label label-danger">User</span>
                </div>
<Modalmsgprofile showt={showt} setShowt={setShowt} handleCloset={handleCloset} idprofile={idprofile}  />

                <div className="profile-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <span>Active User</span>
                </div>
                <div className="profile-since">
                Member since:  {moment(profile.createAt).fromNow()}  
                </div>
                <div className="profile-details">
                  <ul className="fa-ul">
                    <li><i className="fa-li fa fa-comment" />Posts: <span>828</span></li>

                    {  (profilebwroser!=idprofile)  && 
                    (<><button>Add</button>
                    <button onClick={()=>Signaler()}>Signalier</button></>)}
                    {/* <li><i className="fa-li fa fa-tasks" />Tasks done: <span>1024</span></li> */}
                  </ul>
                </div>
                <Modalconversation show={show} setShow={setShow} handleClose={handleClose} idprofile={idprofile} idconversation={profilebwroser}/>

                <div className="profile-message-btn center-block text-center">
                 {  (profilebwroser!=idprofile)  && 

                 <button className="btn btn-success" onClick={()=>{ handleShow()}}>
                    <i className="fa fa-envelope" />
                     Send message</button>}
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8">
              <div className="main-box clearfix">
                <div className="profile-header">
                  <h3><span>User info</span></h3>
                  {/* <a href="#" className="btn btn-primary edit-profile">
                    <i className="fa fa-pencil-square fa-lg" /> Edit profile
                  </a> */}
                </div>
                <div className="row profile-user-info">
                  <div className="col-sm-8"> 
                    <div className="profile-user-details clearfix">
                      
                      
                    <Formik initialValues={{firstname:firstnameprofile,lastname:lastnameprofile,email:emailprofile,password:"00000000",twitter:twitterprofile,linkedin:linkedinprofile,facebook:facebookprofile,skype:skypeprofile,instagram:instagramprofile}}  validationSchema={UpdateSchema} onSubmit={ values=>{
  dispatch(Updateaction(idprofile ,values.firstname,values.lastname,values.email,values.password,values.twitter,values.linkedin,values.facebook,values.skype,values.instagram))
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
<div className="signup">
 {(x.Auto.msg==="user is updatet") && (<div className="alert alert-success" role="alert"> 
 User is updatet 
</div>) }      

<div className="container-fluid ps-md-0">
<div className="row g-0">
{/* <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" /> */}
<div className="col-md-8 col-lg-6">
<div className="login d-flex align-items-center py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-9 col-lg-8 mx-auto">
      <form onSubmit={handleSubmit} className="ff">
        
<div className="spaceone">
          <div className="form-floating mb-3 ">
            <label className="lab" htmlFor="floatingInput">{t("firstname")} :</label>
            <input
                         className="f2"
                         type="text"
             name="firstname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstname}
             disabled={profilebwroser!=idprofile}

           />
                <span className="error">      {errors.firstname && touched.firstname && errors.firstname}</span>

          </div>
          <div className="form-floating mb-3">
            <label className="lab" htmlFor="floatingInput" >{t("lastname")} :</label>
            <input
                         className="f2"
                         type="text"
             name="lastname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastname}
             disabled={profilebwroser!=idprofile}

           />
                <span className="error">      {errors.lastname && touched.lastname && errors.lastname}</span>
          </div>
          <div className="form-floating mb-3">
            <label className="lab" htmlFor="floatingInput">Email :</label>
             <input
                         className="f2"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             disabled={profilebwroser!=idprofile}
           />
                <span className="error">      {errors.email && touched.email && errors.email}</span>
          </div>
          <div className="form-floating mb-3">
            <label className="lab" htmlFor="floatingInput" >{t("password")} :</label>
            <input
                         className="f2"
                         type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             disabled={profilebwroser!=idprofile}

           />
                <span className="error">      {errors.password && touched.password && errors.password}</span>
          </div>
          </div>
         
        
        
            <div className="text-center">
            
          </div>


          <div className="col-sm-4 profile-social spacetwo">
                    <ul className="fa-ul">
                       
                      <li><i className="fa-li fa fa-twitter-square" />
                        <input
                        className="soci"
                        type="text"
                        name="twitter"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={profilebwroser!=idprofile}
                         value={values.twitter}/>
                                         <span className="error">      {errors.twitter && touched.twitter && errors.twitter}</span>

  </li>
                      <li><i className="fa-li fa fa-linkedin-square" />
                      <input
                                                className="soci"

                        type="text"
                        name="linkedin"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={profilebwroser!=idprofile}
                         value={values.linkedin}/>
                                         <span className="error">      {errors.linkedin && touched.linkedin && errors.linkedin}</span>
                         </li>
                      <li><i className="fa-li fa fa-facebook-square" />
                      <input
                                                className="soci"

                        type="text"
                        name="facebook"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={profilebwroser!=idprofile}
                         value={values.facebook}/>
                                         <span className="error">      {errors.facebook && touched.facebook && errors.facebook}</span>
                         </li>
                      <li><i className="fa-li fa fa-skype" />
                      <input
                                                className="soci"

                        type="text"
                        name="skype"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={profilebwroser!=idprofile}
                         value={values.skype}/>
                                         <span className="error">      {errors.skype && touched.skype && errors.skype}</span>  
                                                            </li>
                      <li><i className="fa-li fa fa-instagram" />
                      <input
                                                className="soci"

                        type="text"
                        name="instagram"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={profilebwroser!=idprofile}
                         value={values.instagram}/>
                                         <span className="error">      {errors.instagram && touched.instagram && errors.instagram}</span>  
                        </li> 
                    </ul>
                  </div>
                  <div className="d-grid updatebutton">

                  {  (profilebwroser==idprofile) && 
 <>
            <button className="btn btn-primary edit-profile" type="submit"  disabled={!(isValid && dirty)} ><i className="fa fa-pencil-square fa-lg" /> {t("update")}</button>
          </>}</div>
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
</Formik>
                  
                    </div>
                  </div>
                 
                </div>                 

                <div className="tabs-wrapper profile-tabs">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#tab-activity" data-toggle="tab">Gallery photo</a></li>
                    <li><a href="#tab-friends" data-toggle="tab">Invtation</a></li>
                    <li><a href="#tab-chat" data-toggle="tab">Friends</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="tab-activity">
                      <div className="table-responsive">
                      
                        {(profilebwroser==idprofile)  &&  (x.Auto.user.photo.map(el=>(<Gallery el={el} idprofile={idprofile} imageprofile={imageprofile}/>)))} 

                       {(profilebwroser!=idprofile)  &&  (profile.photo.map(el=>(<Gallery el={el} idprofile={idprofile} profilebwroser={profilebwroser} />)))} 

                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab-friends">
                      <ul className="widget-users row">
                        
                      
                      
                 
                    <Invitationcard />
                      </ul>
                      <br />
                      <a href="#" className="btn btn-success pull-right">View all invitation</a>
                    </div>
                    <div className="tab-pane fade" id="tab-chat">
                      <div className="conversation-wrapper">
                        <div className="conversation-content">
                          <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '340px'}}>
                            <div className="conversation-inner" style={{overflow: 'hidden', width: 'auto', height: '340px'}}>
                              <div className="conversation-item item-left clearfix">
                                <div className="conversation-user">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="conversation-body">
                                  <div className="name">
                                    Ryan Gossling
                                  </div>
                                  <div className="time hidden-xs">
                                    September 21, 2013 18:28
                                  </div>
                                  <div className="text">
                                    I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd.
                                  </div>
                                </div>
                              </div>
                              <div className="conversation-item item-right clearfix">
                                <div className="conversation-user">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="conversation-body">
                                  <div className="name">
                                    Mila Kunis
                                  </div>
                                  <div className="time hidden-xs">
                                    September 21, 2013 12:45
                                  </div>
                                  <div className="text">
                                    Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.
                                  </div>
                                </div>
                              </div>
                              <div className="conversation-item item-right clearfix">
                                <div className="conversation-user">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="conversation-body">
                                  <div className="name">
                                    Mila Kunis
                                  </div>
                                  <div className="time hidden-xs">
                                    September 21, 2013 12:45
                                  </div>
                                  <div className="text">
                                    Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.
                                  </div>
                                </div>
                              </div>
                              <div className="conversation-item item-left clearfix">
                                <div className="conversation-user">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="conversation-body">
                                  <div className="name">
                                    Ryan Gossling
                                  </div>
                                  <div className="time hidden-xs">
                                    September 21, 2013 18:28
                                  </div>
                                  <div className="text">
                                    I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd.
                                  </div>
                                </div>
                              </div>
                              <div className="conversation-item item-right clearfix">
                                <div className="conversation-user">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="conversation-body">
                                  <div className="name">
                                    Mila Kunis
                                  </div>
                                  <div className="time hidden-xs">
                                    September 21, 2013 12:45
                                  </div>
                                  <div className="text">
                                    Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="slimScrollBar" style={{width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: 99, right: '1px', background: 'rgb(0, 0, 0)'}} />
                            <div className="slimScrollRail" style={{width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', opacity: '0.2', zIndex: 90, right: '1px', background: 'rgb(51, 51, 51)'}} />
                          </div>
                        </div>
                        <div className="conversation-new-message">
                          <form>
                            <div className="form-group">
                              <textarea className="form-control" rows={2} placeholder="Enter your message..." defaultValue={""} />
                            </div>
                            <div className="clearfix">
                              <button type="submit" className="btn btn-success pull-right">Send message</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :(<div className="l">
  <div className="lds-heart"><div></div></div>
  </div>)}
       </div>
    )
}