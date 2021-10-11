import {Link} from 'react-router-dom';
import {Logoutdashbord} from "../../action/authenticate_action"
import { useDispatch,useSelector } from 'react-redux'
import Menudash from "./Menudash"
import "./navbar.css"
export default function Navbardash({userliked}){
    const dispatch = useDispatch()
        const x=useSelector(state=>state)
             if  (((x.Autodashbord.isAuto) && (x.Autodashbord.user!==null))) { 
                  var idprofile =x.Autodashbord.user._id  
                 }

    
    return(<div className="navdashb">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Dashbord</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/"> Home <span className="sr-only">(current)</span></Link>
            </li>
              {(x.Autodashbord.user!==null) &&  

         
            (<>
            <li className="nav-item">
            <Link to="/dashbord" onClick={()=>dispatch(Logoutdashbord())}>Log out</Link>   
                     </li>
                     <li className="nav-item">
            <Link to="/users/notification" >
              
              Notification <span class="badge badge-primary">0</span>
</Link>   
                     </li></>)}
                     <li className="nav-item">
            <Link to="/members" >Members</Link>   
                     </li>
                     <li className="nav-item">
            <Link to="/message" >Message</Link>   
                     </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> 
  <Menudash/>
       </div> 
    )
}