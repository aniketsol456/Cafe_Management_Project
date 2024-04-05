import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './component/Signup';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      {/* <Signup/> */}
      <Footer/>
    </div>
  )
}

export default App
