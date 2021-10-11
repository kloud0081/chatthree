import "./gallery.css"
import { useHistory } from "react-router-dom";
import {useState} from "react"
    import axios from  "axios"
    import { useSelector ,useDispatch} from 'react-redux'

export default function Gallery({el,idprofile,imageprofile}){
  const x=useSelector(state=>state)
            let history = useHistory();

    const profilebwroser=history.location.pathname.slice(15,39);
    const etat=x.Auto.user.etat  
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const updatephotodefault=async(id,url)=>{
       
    const  body ={id,url}
      try {
        const res=await axios.patch(`/users/photodefault/${id}`,body)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
      // window.location.reload(false);

   }
   const removephoto=async(iduser,url)=>{

    const  body ={url,imageprofile};
      try {

        const res=await axios.patch(`/users/photo/${iduser}`,body)
        console.log(res.data)
      } catch (error) {
        console.log(error)

      }
      // window.location.reload(false);

   }
    return(   
    
<div className="containera">
        <div className="card-media">
          {/* media container */}
          <div className="card-media-object-containera">
            <img className="card-media-object" src={ el.url } alt="gallery" />
            <span className="card-media-object-tag subtle">Selling Fast</span>
            <ul className="card-media-object-social-list">
              <li>
              {  (profilebwroser===idprofile) && 
<button  disabled={etat==="desactive"}  type="button" className="btn btn-primary btn-sm mr-1 mb-2 " onClick={()=> { {removephoto(idprofile,el.url);}}}>
                {/* <i className="far fa-heart" /> */}Remove 
         </button>}                  </li>
              <li>
              {  (profilebwroser==idprofile) && 
<button  disabled={etat==="desactive"}  type="button" className="btn btn-primary btn-sm mr-1 mb-2 " onClick={()=> { {updatephotodefault(idprofile,el.url);}}}>
                {/* <i className="far fa-heart" /> */}default 
         </button>}              </li>
              <li className="card-media-object-social-list-item-additional">
                <span>+2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
    )
}