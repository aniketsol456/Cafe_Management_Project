import React from 'react';
import Sidebar from './Sidebar';
import './Order.css';
import Footer from './Footer';

const Order = () => {
    return (
        <><div className="order">
              <Sidebar />
              <div className="main-content">
                  <h1>Orders</h1>
              </div>
          </div>
          <Footer/>
          </>
      );
}

export default Order