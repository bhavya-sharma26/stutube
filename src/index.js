import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/base.scss'

// import './src/bootstrap/bootstrap-5.3.0-alpha2/bootstrap-5.3.0-alpha2/scss'
// import './src/bootstrap/bootstrap-5.3.0-alpha2/bootstrap-5.3.0-alpha2/dist/css'
// import './src/bootstrap/bootstrap-5.3.0-alpha2-dist/bootstrap-5.3.0-alpha2-dist/css'
//import 'bootstrap/bootstrap-5.3.0-aplha2/bootstrap-5.3.0-aplha2/dist/css/boostrap.min.css'
import "C:/Program Files/Projects/stutube/src/bootstrap/bootstrap-5.3.0-alpha2/bootstrap-5.3.0-alpha2/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}><App/></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
