import {configureStore,applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducers from './reducers/authReducers'
import homeVideoReducers from './reducers/videoReducers'
import selectedVideoReducers from './reducers/videoReducers'
const reducer = combineReducers({auth:authReducers,homeVideos:homeVideoReducers,selectedVideos:selectedVideoReducers})
const store=configureStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store