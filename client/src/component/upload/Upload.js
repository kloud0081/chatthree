 import  "./upload.css"
import {  useState } from 'react';
import Progressbar from "./Progressbar"
import  Modalmsg from "./Modalmsg"
import { useSelector } from 'react-redux'

export default function Upload(){
       const x=useSelector(state=>state)
const idprofile =x.Auto.user._id  
     const [file, setFile] = useState(null); // storing the uploaded file
      const [uploadok,setUpload]=useState(false)
      const [show, setShow] = useState(false);
       const [loadingmsg,setLoadingmsg]=useState(false)
      const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
     const [error,setError]=useState(null)
     const types=["image/png","image/jpeg"]
     const handleupload=(e)=>{ 
            if ((e.target.files[0]) && types.includes((e.target.files[0]).type)){setFile(e.target.files[0]);setError(null);

       }
            else {  setError("select format image type jpeg or png")}
     }
    return(
         <div  className="up">
 <div className="form-floating mb-3">
            {/* <label for="file"> */}
             {/* <span htmlFor="floatingInput">Photo : */}
        {/* <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" >  */}
        

            <label for="file" class="label-file"><i class="fas fa-plus-circle"></i>Upload photo</label>
            {/* </button> */}

            <input
            className="input-file" 
            id="file"
             type="file"
             name="file"
             onChange={handleupload}
             onClick={()=>{handleShow()}}
           /> 
                {/* <span className="error">      {errors.firstname && touched.firstname && errors.firstname}</span> */}
                 {error && (<div className="alert alert-danger" role="alert">{error}</div>) }
          {file &&    <Progressbar file={file} setFile={setFile}  setUpload={setUpload}/>} 
           {(uploadok) && <Modalmsg handleClose={handleClose}  idprofile={idprofile} counter={x.Auto.numberphoto} show={show} setShow={setShow} /> } 

       </div> </div>
    )
}