import {numberphoto,getuser_success,notification_success,logout_success,update_success,update_error, login_success,login_error,signup_error,signup_success } from "../action/constante";

const intialstate={
    user:null,
    isAuto:false,
    msg:null,
    numberphoto:0
    
}
export const Auto=(state=intialstate,action)=>{
    
    switch (action.type) {

        case numberphoto:
        return {...state,numberphoto:action.payload,isAuto:true}
        case getuser_success:
        return {...state,...action.payload,isAuto:true}
        case signup_success:
            localStorage.setItem("token",action.payload.token)
        return {...state,...action.payload,isAuto:true}
        case signup_error:return {...state,...action.payload,isAuto:false}
        case login_success:
            localStorage.setItem("token",action.payload.token)
        
        return {...state,...action.payload,isAuto:true}
        case login_error:return {...state,...action.payload,isAuto:false}
        case update_success: return {...state,user:{...state.user},...action.payload,isAut:true}
           case update_error:return {...state,isAut:false} 
case logout_success:
    localStorage.removeItem("token")

           return {...state,user:null,msg:null,isAut:false}

           case notification_success:
           return {...state,user:{...state.user,notification:action.payload}}
        default:    return state
    }
}