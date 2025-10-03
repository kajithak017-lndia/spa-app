import React, { useState, useEffect } from "react";
import FeedbackList from "./feedbacklist";

function Contact({ username }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [input, setInput] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Load feedbacks from localStorage on component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    setFeedbacks(stored.reverse()); // reverse to show newest first
  }, []);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    const newFeedback = { user: username || "Anonymous", text: input };
    const updatedFeedbacks = [newFeedback, ...feedbacks];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks.reverse())); // reverse to store oldest first
    setInput("");
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <textarea
        placeholder="Write your feedback..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", minHeight: "100px" }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Submit Feedback
      </button>

      <h2>Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <>
          <FeedbackList feedbacks={feedbacks} showAll={showAll} />
          {feedbacks.length > 10 && (
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "See All Feedbacks"}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Contact;
