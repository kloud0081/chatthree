import {logoutdashbord_success,notificationdashbord_success,updatedashbord_error,updatedashbord_success,logindashbord_success,logindashbord_error} from "../action/constante"

const intialstate={
    user:null,
    isAuto:false,
    msg:null,
}
export const Autodashbord=(state=intialstate,action)=>{
    switch (action.type) {
        case logindashbord_success:
            localStorage.setItem("token",action.payload.token)

            return {...state,...action.payload,isAuto:true}
        case logindashbord_error:return {...state,...action.payload,isAuto:false}
        case updatedashbord_success: return {...state,...action.payload,isAut:true}
           case updatedashbord_error:return {...state,isAut:false} 
case logoutdashbord_success:
           return {...state,user:null,msg:null,isAut:false}

           case notificationdashbord_success:
           return {...state,user:{...state.user,notification:action.payload}}
        default:    return state
    }
}