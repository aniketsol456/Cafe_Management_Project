import React, { useState, useEffect } from 'react';
// import crypto from 'crypto';
import './Profile.css';

const Profile = () => {
  // Simulate user data
  const userData = {
    name: 'John Doe',
    phone: '123-456-7890',
    password: 'password123',
    orders: ['order1', 'order2', 'order3']
  };

  const [encryptedPassword, setEncryptedPassword] = useState('');

  // useEffect(() => {
  //   const hash = crypto.createHash('sha256');
  //   hash.update(userData.password);
  //   setEncryptedPassword(hash.digest('hex'));
  // }, [userData.password]);


  return (
    <div className='profile'>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Phone Number:</strong> {userData.phone}</p>
      <p><strong>Encrypted Password:</strong> {encryptedPassword}</p>
      <p><strong>Order History Count:</strong> {userData.orders.length}</p>
    </div>
  );
}

export default Profile;
