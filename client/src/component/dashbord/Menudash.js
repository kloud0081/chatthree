// import "./menudash.css"
import Membercardashbord from "./Membercardashbord"
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import {  useState } from 'react';
import Profiledashbord from "./Profiledashbord"
import moment from "moment";

export default function Menudash(){
      const [loading,setLoading]=useState(true)

  const [memberslist,setmemberslist]=useState([])
      useEffect(async()=>{
        document.title = " dashbord"
         try{
          const res=await axios.get('/dashbord/memberslist')
 console.log(res.data.listmembers.photo)
          setmemberslist(res.data.listmembers);}
         catch(error){console.log(error)}
              setTimeout(()=> { setLoading(false)},3000);

    },[])
const Blockuser=async(iduser)=>{
  try{const  res=await axios.patch(`/dashbord/blockuser/${iduser}`)}
         catch(error){console.log(error)}

         try{
          const res=await axios.get('/dashbord/memberslist')

           setmemberslist(res.data.listmembers);}
         catch(error){console.log(error)}
}

const Deblockuser=async(iduser)=>{
  try{const  res=await axios.patch(`/dashbord/deblockuser/${iduser}`)}
         catch(error){console.log(error)}

         try{
          const res=await axios.get('/dashbord/memberslist')

           setmemberslist(res.data.listmembers);}
         catch(error){console.log(error)}
}
console.log(memberslist)
    return(<div className="menudashb">

     {loading ? <div className="l">
  <div className="lds-heart"><div></div></div>
  </div>:(
               <section className="py-5 header">
          <div className="container py-4 marginleft">
            
            <div className="row">
              <div className="col-md-3">
                {/* Tabs nav */}
                <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" style = {{marginTop:"250px"}} role="tablist" aria-orientation="vertical">
                  <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <i className="fa fa-user-circle-o mr-2" />
                    <span className="font-weight-bold small text-uppercase infodashbor">Personal information</span></a>
                  <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <i className="fa fa-calendar-minus-o mr-2" />
                    <span className="font-weight-bold small text-uppercase infodashbor">Members</span></a>
                  <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <i className="fa fa-star mr-2" />
                    <span className="font-weight-bold small text-uppercase infodashbor">Photos members</span></a>
                  <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <i className="fa fa-check mr-2" />
                    <span className="font-weight-bold small text-uppercase infodashbor">Blocked members</span></a>
                </div>
              </div>
              <div className="col-md-9">
                {/* Tabs content */}
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade shadow rounded bg-white show active p-5" style = {{marginTop:"290px"}} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h4 className="font-italic mb-4">Personal information</h4>

                    <Profiledashbord/> 
                  </div>
                  <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <h4 className="font-italic mb-4">Members</h4>


                    <div  className="">
<table className="table table-striped ">
<thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">CreatedAt </th>
      <th scope="col">signalisation </th>
      <th scope="col">Etat</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  {memberslist.map(el=>( <tbody>
    <tr>
      <td>{el._id}</td>
       <td>{moment(el.createAt).fromNow()}</td> 
       <td >{el.nombresignalisation}</td> 


       <td>{el.etat}</td>
       <td><button onClick={()=>Blockuser(el._id)}>block</button></td>

    </tr>
    
  </tbody>
  ))}
</table></div>

                  </div>
                  <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <h4 className="font-italic mb-4">Photos users</h4>
                   { memberslist.map(el=> 
                    <Membercardashbord el={el}/>)} 
                  </div>
                  <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h4 className="font-italic mb-4">Blocked users</h4>
                    <div  className="">
<table className="table table-striped ">
<thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">CreatedAt </th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  {memberslist.filter(el=> el.etat=="desactive").map(el=>( <tbody>
    <tr>
      <td>{el._id}</td>
       <td>{moment(el.createAt).fromNow()}</td> 
       <td><button onClick={()=>Deblockuser(el._id)}>debblock</button></td>

    </tr>
    
  </tbody>
  ))}
</table></div> 

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> )}
       </div> 
    )
}