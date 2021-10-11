import { useSelector } from 'react-redux'
import "./normal.css"
import { useEffect,useState } from 'react';
import { useTranslation } from "react-i18next";

import { useHistory } from "react-router-dom";
export default function Normal(){
  const { t, i18n } = useTranslation();

// const lang=localStorage.getItem("lang") || "eng"
 const handleclick=(e)=>{
   console.log(e.target.value)
  //  localStorage.setItem("lng",e.target.value)
  i18n.changeLanguage(e.target.value);
}
  const x=useSelector(state=>state)
     const [loading,setLoading]=useState(false)

  useEffect(()=>{   setTimeout(()=> { setLoading(true)},2000)},[] )

    let history = useHistory();

    return(
    <>{ loading?( 
    <div>
{(((history.location.pathname=="/users/signup") || (history.location.pathname=="/users/login" ) || (history.location.pathname=="/" ))     ) && 
    (<><div className="maintop">
       <div className="right">
        <svg style={{display: 'none'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" wfd-invisible="true"><symbol viewBox="0 0 50 45.4" id="icon-logoheart" xmlns="http://www.w3.org/2000/svg"><path d="M19.6 18.7S38.3-7.4 47.1 2.2c9.1 9.9-5.4 23-12.2 29.3-5.3 4.8-17.2 14-17.2 14S36.9 23.8 41 15.8C45 8 45.4 2.9 42 2.6c-4-.4-22.4 16.1-22.4 16.1z" /><path d="M31.1 19.2S12.1-7 3.2 2.4c-9.7 10.3 5.4 23 12.2 29.3 5.3 4.8 17.4 13.7 17.4 13.7S11.9 22.7 8.7 15.7C5.3 8 5.1 4.4 8.6 3.6c4-.8 22.5 15.6 22.5 15.6z" fill="currentColor" /></symbol><symbol viewBox="0 0 143 21.8" id="site-logo-russiancupid" xmlns="http://www.w3.org/2000/svg"><path className="logo-dark" d="M94.2 16.6c-.7.3-2.2.7-4.2.7-5.6 0-8.5-3.5-8.5-8.1 0-5.5 3.9-8.6 8.8-8.6 1.9 0 3.3.4 4 .7l-.7 2.9c-.6-.2-1.7-.5-3-.5-2.9 0-5.2 1.8-5.2 5.4 0 3.2 1.9 5.3 5.2 5.3 1.1 0 2.3-.2 3-.5l.6 2.7zm12.9-3.3c0 1.5 0 2.8.1 3.8H104l-.2-1.7h-.1c-.5.7-1.6 1.9-3.7 1.9-2.4 0-4.1-1.5-4.1-5.1V5.4h3.7v6.3c0 1.7.6 2.7 1.8 2.7 1 0 1.6-.7 1.8-1.3.1-.2.1-.5.1-.8v-7h3.7l.1 8zm2.9-4c0-1.5 0-2.9-.1-3.9h3.2l.2 1.6c.9-1.2 2.2-1.9 3.9-1.9 2.6 0 4.9 2.2 4.9 6 0 4.3-2.7 6.3-5.3 6.3-1.4 0-2.5-.6-3-1.3v5.8H110V9.3zm3.7 2.7c0 .3 0 .6.1.8.2 1 1.1 1.7 2.1 1.7 1.6 0 2.5-1.3 2.5-3.3 0-1.9-.8-3.3-2.5-3.3-1 0-1.9.8-2.2 1.8l-.1.6.1 1.7zm14.5-9.9c0 1-.8 1.8-2 1.8s-1.9-.8-1.9-1.8c0-1.1.7-1.8 1.9-1.8 1.2-.1 1.9.7 2 1.8zm-3.8 15V5.4h3.6v11.7h-3.6zM142.3 0v13.5c0 1.3 0 2.7.1 3.5h-3.2l-.2-1.7c-.7 1.3-2.2 2-3.7 2-2.8 0-5-2.4-5-6 0-4 2.4-6.2 5.3-6.2 1.4 0 2.6.5 3.1 1.3V0h3.6zm-3.6 10.3v-.6c-.2-1-1-1.8-2.1-1.8-1.7 0-2.5 1.5-2.5 3.3 0 2 1 3.2 2.5 3.2 1.1 0 1.9-.7 2.1-1.8.1-.3.1-.5.1-.8v-1.5h-.1z" /><path className="logo-light" d="M0 .9C1.2.7 2.9.6 4.9.6 7.3.6 9 1 10.1 1.9c1 .8 1.5 1.9 1.5 3.4 0 2.1-1.5 3.5-2.9 4v.1c1.1.5 1.8 1.5 2.2 3 .5 1.8 1 3.9 1.3 4.6H8.5c-.3-.5-.6-1.8-1.1-3.8-.4-2-1.1-2.6-2.6-2.6H3.6V17H0V.9zm3.6 7H5c1.9 0 3-.9 3-2.3 0-1.5-1-2.2-2.7-2.3-.9 0-1.4.1-1.7.1v4.5zm21.6 5.2c0 1.5 0 2.8.1 3.8h-3.2l-.2-1.7h-.1c-.5.7-1.6 1.9-3.7 1.9-2.4 0-4.1-1.5-4.1-5.1V5.2h3.7v6.3c0 1.7.6 2.7 1.8 2.7 1 0 1.6-.7 1.8-1.3.1-.2.1-.5.1-.8v-7h3.7v8h.1zm2.9.6c.7.4 2.1.9 3.1.9 1.1 0 1.6-.4 1.6-1s-.4-.9-1.7-1.3c-2.4-.8-3.4-2.1-3.3-3.5 0-2.2 1.9-3.8 4.8-3.8 1.4 0 2.6.3 3.3.7l-.6 2.5c-.5-.3-1.5-.7-2.5-.7-.9 0-1.4.4-1.4 1s.5.8 1.9 1.3c2.2.8 3.2 1.9 3.2 3.6 0 2.2-1.7 3.8-5.1 3.8-1.5 0-2.9-.3-3.8-.8l.5-2.7zm10.4 0c.7.4 2.1.9 3.1.9 1.1 0 1.6-.4 1.6-1s-.4-.9-1.7-1.3c-2.4-.8-3.4-2.1-3.3-3.5C38.2 6.6 40.1 5 43 5c1.4 0 2.6.3 3.3.7l-.6 2.5c-.7-.4-1.7-.8-2.7-.8-.9 0-1.4.4-1.4 1s.5.8 1.9 1.3c2.2.8 3.2 1.9 3.2 3.6 0 2.2-1.7 3.8-5.1 3.8-1.5 0-2.9-.3-3.8-.8l.7-2.6zM52.7 1.9c0 1-.8 1.8-2 1.8s-1.9-.8-1.9-1.8c0-1.1.7-1.8 1.9-1.8s2 .8 2 1.8zm-3.8 15V5.2h3.6v11.7h-3.6zm13.3 0l-.2-1.2h-.1c-.8.9-2 1.4-3.4 1.4-2.4 0-3.8-1.7-3.8-3.6 0-3 2.7-4.5 6.9-4.5v-.1c0-.6-.3-1.5-2.1-1.5-1.2 0-2.5.4-3.2.9l-.7-2.4c.8-.5 2.4-1 4.6-1 3.9 0 5.2 2.3 5.2 5.1v4.1c0 1.1 0 2.2.2 2.9l-3.4-.1zm-.4-5.5c-1.9 0-3.4.4-3.4 1.8 0 .9.6 1.4 1.4 1.4.9 0 1.7-.6 1.9-1.3l.1-.6v-1.3zm6.4-2.5c0-1.5 0-2.7-.1-3.7h3.2l.2 1.6h.1c.4-.8 1.6-1.9 3.5-1.9 2.4 0 4.2 1.6 4.2 5v7h-3.6v-6.5c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V17h-3.6V8.9h-.2z" /></symbol></svg>
         <div className="logo">
        <div>  <a href="/"> 
            <svg className=""><use xlinkHref="#icon-logoheart" /></svg></a></div>
          <div> <a href="/" className="LOVE"> 
          Love <br/> Me
          </a></div>
          
          </div>
{  (history.location.pathname==="/") &&  

           (<><h1 className="h1 white m0 mb1 line-height-3">{t("Meetsiglegirl")}</h1>
          <h2 className="h2 white my2 line-height-4">{t("leasdingwomN")}</h2>
         
          <a className="btn-bg btn-color block py1 px2 button " href="/members" title="Views Singels now">
          <button  type="button" className="buttonview" >
            {t("viewsigles")}

                  </button></a></>)  }  
          </div>

<div className="dropdown middle">

        <button   className="btn  english btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <a className="aa btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"  title="select your language">
        <i className="fas fa-globe-americas"></i>   <span value="en" onClick={e=>handleclick(e)}>English</span>
            </a>        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        
        <ul className="p0 pt1" wfd-invisible="true">
                    <li><button className="p1 block ppp" value="fr" onClick={e=>handleclick(e)}>French</button></li> 
                    <li><button className="p1 block ppp" value="de" onClick={e=>handleclick(e)}>German</button></li>
                  
                  
                    </ul>
          
        </div>

      </div>
      {  (history.location.pathname==="/"  || history.location.pathname==="/users/signup") &&  

        (<div className="left">
        <a href="/users/login"  title="Login to chat.com">

                    <button  type="button" className="loginnormal" >

                    {t("login")}
              </button>
            </a>  </div>)}          
                
       </div> <div></div></>)}</div>
     ):<div className="l">
  <div className="lds-heart"><div></div></div>
  </div>}</> )
  

}