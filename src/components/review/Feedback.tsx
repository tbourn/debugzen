import React from 'react';
import '../../styles/review/feedback.css';

interface FeedbackProps {
  feedback: any[];
  isLoading: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, isLoading }) => {
  return (
    <div className="rightPane" id="rightPane">
      <h2 className="feedbackHeader">Feedback</h2>
      {isLoading ? (
        <div className="loading">
          <span>Processing...</span>
          <div className="spinner"></div>
        </div>
      ) : feedback.length === 0 ? (
        <p className="centered">Submit code and get AI-Powered feedback!</p>
      ) : (
        feedback.map((item, index) => (
          <div
            key={index}
            className={`feedbackItem ${item.isError ? 'error' : ''}`}
          >
            {item.isError && item.icon}
            <strong>{item.title}</strong>
            <br />
            {item.description}
          </div>
        ))
      )}
    </div>
  );
};

export default Feedback;
