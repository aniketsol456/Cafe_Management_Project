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
      </Routes>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App
