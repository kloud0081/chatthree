import "./modalmsg.css"
import {Button,Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
  import Upload from "./Upload"
  import {Link} from 'react-router-dom';


export default function Modalmsg({show,counter,handleClose,idprofile}){
    let history = useHistory();

    return(<div> <Modal show={show} onHide={handleClose} >
       <Modal.Header closeButton onClick={()=>history.push("/members")}>
          <Modal.Title> 
        </Modal.Title>
        </Modal.Header>

        <Modal.Body>
  <div className="gg"> 
          <div className="success b">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                </div>
       <              h1 className="hh">  Photo {counter} has been uploaded"</h1>
        
       { (counter<5) ? 
 <p className="p">Start browsing and communicating with your matches now.</p> : <p className="p">you are upload 5 photos</p>}
           </div>  </Modal.Body>

      
        <Modal.Footer>
        <a className="nav-link"  href={`/users/profile/${idprofile}`}>

        {/* <Link className="nav-link"  to={`/users/profile/${idprofile}`}> */}
           <button className="btn btn-primary "  variant="secondary" onClick={()=>history.push("/members")}>
            View My Matches
          </button>
                   </a> 

          {/* </Link> */}
          { (counter<5) &&   (<Upload/>) }

        
        </Modal.Footer>
      </Modal></div>  
    )
}