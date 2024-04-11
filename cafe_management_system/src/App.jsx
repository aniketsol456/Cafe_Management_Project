import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './component/Signup';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './component/Menu';
import Gallery from './component/Gallery';
import Chef from './component/Chef';
import AboutUs from './component/AboutUs';
import Blog from './component/Blog';

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
        <Route exact path="/blog" element={ <Blog/>}/>
        <Route exact path="/sign-up" element={ <Signup/>}/>
      
      </Routes>
      <Footer/>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App
