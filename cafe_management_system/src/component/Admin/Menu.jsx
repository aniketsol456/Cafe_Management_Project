import React from 'react'
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer';
import '../Admin/Menu.css';

const Menu = () => {
    return (
        <><div className="menu">
              <Sidebar />
              <div className="main-content">
                  <h1>Menu</h1>
              </div>
          </div>
          <Footer/>
          </>
      );
}

export default Menu