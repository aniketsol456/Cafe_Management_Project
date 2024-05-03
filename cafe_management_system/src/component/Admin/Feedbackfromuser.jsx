import React from 'react'
import Sidebar from '../Admin/Sidebar';
import Footer from '../Admin/Footer';
import '../Admin/Feedbackfromuser.css';

const Feedbackfromuser = () => {
    return (
        <><div className="Feedbackfrom">
              <Sidebar />
              <div className="main-content">
                  {/* Content for dashboard will go here */}
                  <h1>Feedback From Users</h1>
              </div>
          </div>
          <Footer/>
          </>
      );
}

export default Feedbackfromuser