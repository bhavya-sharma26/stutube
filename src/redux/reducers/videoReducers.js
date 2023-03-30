import { combineReducers } from "@reduxjs/toolkit"
import { HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS,HOME_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL } from "../actionType"

const homeVideoReducers = (state={
videos:[]
,loading:false,
nextPageToken:null,
activeCategory:'All'
}
,action)=>{
const {type,payload} = action
switch(type){
    case HOME_VIDEO_SUCCESS:
        return{
            ...state,
            videos:state.activeCategory===payload.category?[...state.videos,...payload.videos]:
            payload.videos ,
            loading:false,
            nextPageToken:payload.nextPageToken,
            activeCategory:payload.category,
}
case HOME_VIDEO_FAIL:
    return{
    ...state,
    error:payload,
    loading:false,
    }
    case HOME_VIDEO_REQUEST:
        return{
            ...state,
            loading:true,
        }
default :
return state
}
}

const selectedVideoReducers = (
    state={
    loading:true,video:null
},action)=>{
    const {payload,type}=action
    switch(type){
        case SELECTED_VIDEO_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SELECTED_VIDEO_SUCCESS:
            return{
                ...state,
                video:payload,loading:false
            }
        case SELECTED_VIDEO_FAIL:
            return{
                ...state,
                video:null,
                loading:false,
                error:payload
            }
        default:
            return state
    }
}
export default combineReducers(selectedVideoReducers,homeVideoReducers)