import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './LoginScreens.scss'
import {login} from '../../redux/actions/authActions'
import {useNavigate} from 'react-router-dom'
const LoginScreens = () =>{
    const dispatch = useDispatch()

    const accessToken =useSelector(state=>state.auth.accessToken)
    const handleLogin = () =>{
    dispatch(login())
    }
    const history=useNavigate()
    useEffect(() => {
      if(accessToken){
history.push('/')
      }
    }, [accessToken,history])
    
    return (
        <div className='login'>
            <div className='login__container'>
                <img src= "https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=''/>
                <button onClick={handleLogin}>Login with Google</button>
                <p>Video Streaming Web App</p>
            </div>
        </div>
    )
}
export default LoginScreens