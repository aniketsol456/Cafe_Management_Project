import React, { useState, useEffect } from "react";
import Sidebar from "../Admin/Sidebar";
import Footer from "../Admin/Footer";
import "../Admin/Customer.css";
import app from "../../firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      const db = getFirestore(app);
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const customersData = usersSnapshot.docs.map((doc) => doc.data());
      setCustomers(customersData);
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  return (
    <>
      <div className="customer">
        <Sidebar />
        <div className="main-content">
          <h1>Customers</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="customer-list">
              {customers.length === 0 ? (
                <p>No customers found.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Customer;
