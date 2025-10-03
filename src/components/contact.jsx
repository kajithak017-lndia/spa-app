import React, { useState } from "react";
import FeedbackList from "./feedbacklist";

function Contact({ username }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [input, setInput] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setFeedbacks([{ text: input, user: username || "Anonymous" }, ...feedbacks]);
      setInput("");
    }
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <textarea
        placeholder="Write your feedback..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{ width: "100%", maxWidth: "500px" }}
      />
      <br />
      <button onClick={handleSubmit}>Submit Feedback</button>

      <h2>Feedbacks</h2>
      <FeedbackList feedbacks={feedbacks} showAll={showAll} />

      {feedbacks.length > 10 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All Feedbacks"}
        </button>
      )}
    </div>
  );
}

export default Contact;
