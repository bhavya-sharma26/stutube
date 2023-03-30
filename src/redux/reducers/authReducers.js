
import { LOAD_PROFILE, LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL, LOG_OUT } from "../actionType"

const initialState = {
    accessToken:sessionStorage.getItem("stu-access-token")?sessionStorage.getItem("stu-access-token"): null,
    user:sessionStorage.getItem("stu-profile")?JSON.parse(sessionStorage.getItem("stu-profile")):null,
    loading:false 
}

const authReducers = (prevState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading:true
            }
            case LOGIN_SUCCESS:
                return {
                    ...prevState,
                    accessToken:payload,
                    loading:false
                }
                    case LOAD_PROFILE:
            return {
                ...prevState,
                user:payload
            }
            case LOGIN_FAIL:
                    return {
                        ...prevState,
                        accessToken:null,
                        loading:false,
                        error:payload
                    }
            
            case LOG_OUT:
                return{
                    ...prevState,
                    accessToken:null,
                    user:null
                }
            default:
                return prevState
                
    }
}
export default authReducers;