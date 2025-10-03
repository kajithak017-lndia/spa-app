import React from "react";

function FeedbackList({ feedbacks, showAll }) {
  const displayList = showAll ? feedbacks : feedbacks.slice(0, 10);

  return (
    <ul>
      {displayList.map((f, idx) => (
        <li key={idx}>
          <b>{f.user}:</b> {f.text}
        </li>
      ))}
    </ul>
  );
}

export default FeedbackList;
