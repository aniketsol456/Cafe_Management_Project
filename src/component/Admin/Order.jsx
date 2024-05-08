import React from 'react';
import Sidebar from '../Admin/Sidebar';
import '../Admin/Order.css';
import Footer from '../Admin/Footer';

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