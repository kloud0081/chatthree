import  useFirestore from "../../hooks/useFirestore"
import Membercard from "../Membercard"

import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'

export default function Photouser({members,idprofile,infousers,search,memberslist}){
// const [infousers,setinfoUsers]=useState([])
//     useEffect(async()=>{
        
//            try{    const res=await axios.get("/users/allusers");
//         //    console.log(res.data)
//            setinfoUsers(res.data.allusers)
//         }
//            catch(error){console.log(error)}              
          
//       },[])

    //   console.log(infousers)
// const {docs}=useFirestore("members")
let history = useHistory();
const x=useSelector(state=>state)

var documentphoto=[];
 if     (history.location.pathname==="/members") {documentphoto=infousers.filter(el=>el.firstname.toLowerCase().includes(search)).filter(el=>(el._id!==idprofile ) )}
  if     (history.location.pathname==="/dashbord") {documentphoto=memberslist.filter(el=>el.firstname.toLowerCase().includes(search)).filter(el=>(el._id!==idprofile) )}
//   if     (history.location.pathname==="/dashbord") {documentphoto=memberslist }
    return(<>
{   documentphoto.map(member=>(<Membercard member={member}   idprofile={idprofile}/>))}

       </> 
    
    )}