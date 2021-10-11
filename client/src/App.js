import "./app.css"
import Navbar from "./component/Navbar"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Profile from "./component/Profile"
import Noaccess from "./component/Noaccess"
import Normal from "./component/Normal"
import Footer from "./component/Footer"
import Message from "./component/Chat/Message"
import Navbardash from "./component/dashbord/Navbardash"
import Logindashbord from "./component/dashbord/Logindashbord"
import {getUser} from "./action/authenticate_action"
import { useDispatch,useSelector } from 'react-redux'
import Members from "./component/Members"
import Notification from "./component/Notification"
import { BrowserRouter,Route} from 'react-router-dom';
import {useEffect,useState} from "react"
    import { LastLocationProvider } from 'react-router-last-location';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  const [loading,setLoading]=useState(true)

  const x=useSelector(state=>state)
    const dashbordreducers=useSelector(state=>state)
  if  (((x.Auto.isAuto) && (x.Auto.user!==null))) { 
        var idprofile =x.Auto.user._id  

        var remeberme=x.Auto.user.remeberme

       }

        if  (((dashbordreducers.Autodashbord.isAuto) && (dashbordreducers.Autodashbord.user!==null))) { 
         var isAutdashbord =x.Autodashbord.user._id  
        }

  const isAut= (((x.Auto.isAuto) &&   (x.Auto.user!==null))) 
  const msg=x.Auto.msg  

  // const rememberme=x.Auto.user.rememberme
   useEffect(()=>{
         document.title = "Love Me Chat site";
 const t=  dispatch(getUser());

    //  if (remeberme==="false"){dispatch(Logout())}
     setTimeout(()=> { setLoading(false)},3000);
     },[dispatch])
const [search,setSearch]=useState("")
 
  return (<BrowserRouter>
            {/* <LastLocationProvider> */}

  {(loading) ? (<>
  <div className="l">
  <div className="lds-heart"><div></div></div>
  </div>
  </>):(<>

    <div className="app">
         <Normal/>
    

     {/* {!isAut   &&   <Normal/>}  */}
     {/* {(remeberme=="false") && dispatch(Logout())} */}

 {isAut   && 
    <Navbar search={search} setSearch={setSearch} />} 

   {isAutdashbord  && <Navbardash/>  } 
  {/* <P/> */}
   <Route  path="/users/login" ><Login/></Route>
    <Route path="/users/signup"><Signup/></Route>
        <Route path="/users/notification" render={(props) =>{if (isAut) {return <Notification {...props}/>} else {return <Noaccess/>} }}></Route>
        <Route exact path="/dashbord" ><Logindashbord/></Route>
    <Route path="/users/Profile/:idprofile"  render={(props) =>{if (isAut) {return <Profile {...props}/>} else {return <Noaccess/>} }} />
    <Route path="/message"  render={(props) =>{if (isAut) {return <Message {...props}/>} else {return <Noaccess/>} }} />
    <Route  path="/Members" > <Members search={search} /></Route>
        

<Footer/>
    </div>

  </>)}

  </BrowserRouter>);
}

export default App;
