import React, { useState, useEffect } from "react";

function Contact({ username }) {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    setFeedbacks(stored);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const newFeedbacks = [{ ...formData, date: new Date() }, ...feedbacks];
    setFeedbacks(newFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(newFeedbacks));
    setFormData({ name: "", message: "" });
  };

  if (!username) {
    return (
      <section>
        <h1>Access Denied</h1>
        <p>Please sign in from Home page to access Feedback.</p>
      </section>
    );
  }

  const displayedFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 10);

  return (
    <section>
      <h1>Feedback</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>

      <h2>Latest Feedbacks</h2>
      {displayedFeedbacks.length === 0 && <p>No feedbacks yet.</p>}
      <ul>
        {displayedFeedbacks.map((fb, idx) => (
          <li key={idx}>
            <strong>{fb.name}</strong> ({new Date(fb.date).toLocaleString()}):{" "}
            {fb.message}
          </li>
        ))}
      </ul>

      {feedbacks.length > 10 && !showAll && (
        <button onClick={() => setShowAll(true)}>See All Feedbacks</button>
      )}
    </section>
  );
}

export default Contact;
