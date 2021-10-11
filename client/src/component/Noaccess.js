import "./noaccess.css"
import {Link} from 'react-router-dom';

export default function Noaccess(){
    return(
    
    <div className="noaccess">
      <Link to="/users/login">
<div className="alert alert-danger" role="alert">
  You must login!
</div></Link>

       </div> 
    )
}