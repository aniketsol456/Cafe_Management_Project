import React from 'react';
import Sidebar from '../Admin/Sidebar';
import '../Admin/Dashboard.css';
import Footer from '../Admin/Footer';

const Dashboard = () => {
  return (
    <><div className="dashboard">
          <Sidebar />
          <div className="main-content">
              {/* Content for dashboard will go here */}
              <h1>Dashboard</h1>
          </div>
      </div>
      <Footer/>
      </>
  );
};

export default Dashboard;
