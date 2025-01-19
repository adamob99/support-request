import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const ConfirmationPage = () => {
  const formData = useSelector(
    (state) => state.supportRequest[state.supportRequest.length - 1]
  );

  if (!formData)
    return (
      <div className="confirmation-container">
        <h1>No data submitted yet.</h1>
      </div>
    );

  return (
    <div className="confirmation-container">
      <h1>Submission Confirmation</h1>
      <div className="confirmation-content">
        <p>
          <strong>Full Name:</strong> {formData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Issue Type:</strong> {formData.issueType}
        </p>
        <p>
          <strong>Tags:</strong> {formData.tags.join(", ")}
        </p>
        <h3>Steps to Reproduce:</h3>
        <ol>
          {formData.steps.map((step, index) => (
            <li key={index}>{step.description}</li>
          ))}
        </ol>
        <button onClick={() => (window.location.href = "/")}>
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
