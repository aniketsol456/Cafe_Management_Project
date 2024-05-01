import React from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Customer.css';

const Customer = () => {
    return (
        <><div className="customer">
              <Sidebar />
              <div className="main-content">
                  {/* Content for dashboard will go here */}
                  <h1>Customers</h1>
              </div>
          </div>
          <Footer/>
          </>
      );
}

export default Customer