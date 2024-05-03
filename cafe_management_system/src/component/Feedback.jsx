import React, { useState } from 'react';  // Import useState here
import './Feedback.css';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData({
            ...feedbackData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedbackData);
        // Reset feedback data after submission
        setFeedbackData({
            name: '',
            email: '',
            feedback: ''
        });
    };

    return (
        <div className="feedback-form">
            <h2>Provide Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedbackData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedbackData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Your Feedback:</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={feedbackData.feedback}
                        onChange={handleInputChange}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default Feedback;
