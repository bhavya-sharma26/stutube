import './Components/app.scss';
import React ,{useState,useEffect}from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/header/Header.js'
import Sidebar from './Components/sidebar/Sidebar'
import CategoriesBar from './Components/categoriesBar/CategoriesBar'
import Video from './Components/Video/Video'
import HomeScreens from './Screens/HomeScreens/HomeScreens';
import LoginScreens from './Screens/LoginScreens/LoginScreens';
import { BrowserRouter as Router, Navigate,Routes,Route, Switch, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WatchScreens from './Screens/watchScreens/WatchScreens'
const Layout = ({children}) =>{
  const [sidebar,toggleSidebar]=useState(false);
  const handleToggleSidebar=()=>toggleSidebar(value=>!value)
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container border border-info'>
        <Sidebar sidebar={sidebar}  handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className='app__main border border-warning'>
          {children}
        </Container>
      </div>
    {/* <CategoriesBar/>
    <Video/> */}
    </>
  );
}
function App() {
  const history=useNavigate()
  const {accessToken,loading}=useSelector(state=>state.auth)
  useEffect(() => {
    if(!loading && !accessToken){
history.pushState('/auth')
    }
  }, [accessToken,loading,history])
  
    return(
      <Router>
    
      <Routes>
      <Route path='/' style={{textDecoration:'none'}} exact element={<Layout>
        <HomeScreens/>
       </Layout>} />
     
      <Route path="/auth" style={{textDecoration:'none'}} element={<LoginScreens/>}/>
     
      <Route path="/search" style={{textDecoration:'none'}} element={ <Layout>
          <h1>Search Results</h1>
        </Layout>}/>
      
        <Route path="/watch/:id" style={{textDecoration:'none'}} element={ <Layout>
          <WatchScreens/>
        </Layout>}/>
      {/* <Route>
        <Navigate to='/' style={{textDecoration:'none'}}/>
      </Route> */}
      </Routes>
      
    </Router>
  );
}

export default App;