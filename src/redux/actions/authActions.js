import firebase from 'firebase/compat/app'
import {GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType'
export const login =()=> async dispatch =>{
    try{
        dispatch({
            type:LOGIN_REQUEST,
        })
       const provider = new GoogleAuthProvider()
       provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
       const res=await signInWithPopup(provider)
       console.log(res)
       const accessToken = res.credential.accessToken
       const profile ={
        name:res.additionalUserInfo.profile.displayName,
        photoURL:res.additionalUserInfo.profile.picture,
       }
       sessionStorage.setItem("stu-access-token",accessToken)
       sessionStorage.setItem("stu-profile",JSON.stringify(profile))
       dispatch({
        type:LOGIN_SUCCESS,
        payload:accessToken
       })
       dispatch({
        type:LOAD_PROFILE,
        payload:profile,
       })

    }catch(error){
console.log(error.message)
dispatch({
    type:LOGIN_FAIL,
    payload:error.message,
})
    }
}
export const log_out =() =>async dispatch =>{
await signOut()
dispatch({
    type:LOG_OUT
})
sessionStorage.removeItem("stu-access-token")
sessionStorage.removeItem("stu-profile")
}