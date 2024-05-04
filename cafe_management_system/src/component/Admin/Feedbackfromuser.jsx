import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Sidebar from "../Admin/Sidebar";
import Footer from "../Admin/Footer";
import "../Admin/Feedbackfromuser.css";
import app from "../../firebaseconfig";

const Feedbackfromuser = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const feedbackRef = collection(db, "user-feedbacks");
      const querySnapshot = await getDocs(feedbackRef);
      const feedbackData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbackList(feedbackData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="Feedbackfrom">
        <Sidebar />
        <div className="main-content">
          <h1>Feedback From Users</h1>
          <div className="feedback-list">
            {feedbackList.map((feedback) => (
              <div key={feedback.id} className="feedback-item">
                <h3>{feedback.name}</h3>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Feedback:</strong> {feedback.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedbackfromuser;
