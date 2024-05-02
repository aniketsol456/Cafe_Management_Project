import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  // Static logo and phone number
  const logoUrl = 'data:image/png;base64,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'; // Update with your logo image path
  const phoneNumber = '6356056120';

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logoUrl} alt="Logo" className="logo" />
      </div>

      {/* Display the static phone number */}
      <div className="phone-number-container">
        <p>Phone Number: {phoneNumber}</p>
      </div>

      {/* Sidebar menu with navigation links */}
      <ul className="menu-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="active">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" activeClassName="active">
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/manu" activeClassName="active">
            Menu Management
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
