import React, { useState, useEffect } from "react";
import Sidebar from "../Admin/Sidebar";
import Footer from "../Admin/Footer";
import "../Admin/Customer.css";
import app from "../../firebaseconfig";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      const db = getFirestore(app);
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const customersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCustomers(customersData);
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  const handleDeleteCustomer = async (customerId) => {
    const db = getFirestore(app);
    try {
      await deleteDoc(doc(db, "users", customerId));
      setCustomers(customers.filter(customer => customer.id !== customerId));
      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error removing customer: ", error);
      alert("Failed to delete the customer.");
    }
  };

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
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td>
                          <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                        </td>
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
