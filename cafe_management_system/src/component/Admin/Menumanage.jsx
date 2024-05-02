import React from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Admin/Menumanage.css';

const Menumanage = () => {
    return (
        <><div className="menumanage">
              <Sidebar />
              <div className="main-content">
                  <h1>Menu</h1>
              </div>
          </div>
          <Footer/>
          </>
      );
}

export default Menumanage