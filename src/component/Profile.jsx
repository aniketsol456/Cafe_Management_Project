import React, { useState, useEffect } from "react";
// import crypto from 'crypto';
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  // Simulate user data
  const userData = {
    name: "John Doe",
    phone: "123-456-7890",
    password: "password123",
    orders: ["order1", "order2", "order3"],
  };

  const [encryptedPassword, setEncryptedPassword] = useState("");

  // useEffect(() => {
  //   const hash = crypto.createHash('sha256');
  //   hash.update(userData.password);
  //   setEncryptedPassword(hash.digest('hex'));
  // }, [userData.password]);

  const handleLogout = () => {
    // Clear the localStorage or any other user session data
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    // Navigate to the signup page
    navigate('/sign-up');  // Adjust the path as per your routing settings
  };
  
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Phone Number:</strong>
        {phone}
      </p>
      <p>
        <strong>Encrypted Password:</strong> {encryptedPassword}
      </p>
      <p>
        <strong>Order History Count:</strong> {userData.orders.length}
      </p>
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
