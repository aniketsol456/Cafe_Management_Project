import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './component/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './component/Menu';
import Gallery from './component/Gallery';
import Chef from './component/Chef';
import AboutUs from './component/AboutUs';
import Feedback from './component/Feedback';
import Cart from './component/Cart';
import Profile from './component/Profile';
import Dashboard from './component/Admin/Dashboard';
import Sidebar from './component/Admin/Sidebar';
import manu from './component/Admin/Menumanage';
import Order from './component/Admin/Order';
import Customer from './component/Admin/Customer';
import Menumanage from './component/Admin/Menumanage';
import Feedbackfromuser from './component/Admin/Feedbackfromuser';

const App = () => {

  return (
    <BrowserRouter>
    <>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/menu" element={ <Menu/>}/>
        <Route exact path="/gallery" element={ <Gallery/>}/>
        <Route exact path="/chef" element={ <Chef/>}/>
        <Route exact path="/about" element={ <AboutUs/>}/>
        <Route exact path="/feedback" element={ <Feedback/>}/>
        <Route exact path="/sign-up" element={ <Signup/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path = '/home' element={<Dashboard/>}/>
        <Route exact path = '/orders' element={<Order/>}/>
        <Route exact path = '/customers' element={<Customer/>}/>
        <Route exact path = '/manu' element={<Menumanage/>}/>
        <Route exact path= '/feedbackfromuser'element={<Feedbackfromuser/>}/>
      </Routes>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App
