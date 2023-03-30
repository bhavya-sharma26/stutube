import {configureStore,applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducers from './reducers/authReducers'
import homeVideoReducers from './reducers/videoReducers'
const reducer = combineReducers({auth:authReducers,homeVideos:homeVideoReducers})
const store=configureStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store