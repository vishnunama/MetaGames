// import logo from './logo.svg';
import AboutNews from './component/AboutNews';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
// import ProsessAndServices from './component/ProsessAndServices';
// import TrendingProducts from './component/TrendingProducts';
// import Message from './component/Message';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './component/AboutUs';
import OurProcess from './component/OurProcess';
import Portfolio from './component/Portfolio';
import ContactUs from './component/ContactUs';
import { ScrollToScroll } from './component/WindowToScroll';
import { Avatar } from '@mui/material';
// import Login from './component/Login';
// import Logout from './component/Logout';
// import LoginForm from './component/LoginForm';


function App() {
  return (
    <div>

<BrowserRouter>
<ScrollToScroll/>
<Header/>

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path='/OurProcess'element={<OurProcess/>}/>
        {/* <Route path='/Portfolio' element={<Portfolio/>}/> */}
        <Route path='/ContactUs' element={<ContactUs/>}/>
        {/* <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/> */}
        {/* <Route path= "/LoginForm" element={<LoginForm/>}/> */}


       
      </Routes>
      <Footer/>
    </BrowserRouter>


      {/* <Header/>
      <Home/>
      <ProsessAndServices/>
      <TrendingProducts/>
      <AboutNews/>
      <Message/> */}
    </div>
  );
}

export default App;
