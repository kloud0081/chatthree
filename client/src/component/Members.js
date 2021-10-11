import Photousers from "./upload/Photousers"
import "./members.css"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
// import { useMutation, useNotify, useRefresh, Loading } from 'react-admin';



export default function Members({history,search}){
  const [infousers,setinfoUsers]=useState([])
  // const refresh = useRefresh(history, redirectPath);
  useEffect(()=>{
    async function getinfouser(){
          try{    const res=await axios.get("/users/allusers");
          setinfoUsers(res.data.allusers)
          }
          catch(error){console.log(error)} }getinfouser()
                      
    
    },[])
   const x=useSelector(state=>state)
   if (((x.Auto.isAuto) &&   (x.Auto.user!==null))) {    
     var idprofile =x.Auto.user._id;
   }
   const [loading,setLoading]=useState(false)

  useEffect(()=>{    document.title = "Members";setTimeout(()=> { setLoading(true)},2000)},[] )

    return(<div className="MEMBERS">{ loading? 
        (<div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex flex-row justify-content-between align-items-center filters">
          <h6>{infousers.filter(el=>el._id!==idprofile).length} Members       
</h6>
          <div className="right-sort">
            <div className="sort-by"><span className="mr-1">Sort by:</span><a href="/">Most popular</a><i className="fa fa-angle-down ml-1" /><button className="btn btn-outline-dark btn-sm ml-3 filter" type="button">Filters&nbsp;<i className="fa fa-flask" /></button></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-1">
      
    <Photousers members="members" search={search} infousers={infousers}  idprofile={idprofile}/>

    </div>
    <div className="d-flex justify-content-end text-right mt-2">
      <nav>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
        </ul>
      </nav>
    </div>
  </div>):<div className="l">
  <div className="lds-heart"><div></div></div>
  </div>}
        </div>
    )
}