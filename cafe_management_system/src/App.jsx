import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './component/Signup';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      {/* <Home/> */}
      <Signup/>
    </div>
  )
}

export default App
