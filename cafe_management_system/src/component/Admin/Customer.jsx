import React from 'react'
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer';
import '../Admin/Customer.css';

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