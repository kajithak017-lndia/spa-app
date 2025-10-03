import React from "react";

function FeedbackList({ feedbacks = [], showAll }) {
  // Show first 10 if showAll is false
  const displayList = showAll ? feedbacks : feedbacks.slice(0, 10);

  if (feedbacks.length === 0) {
    return <p>No feedback yet. Be the first to leave one!</p>;
  }

  return (
    <div className="feedback-list">
      <ul>
        {displayList.map((f, idx) => (
          <li key={idx} className="feedback-item">
            <b>{f.user}:</b> {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
