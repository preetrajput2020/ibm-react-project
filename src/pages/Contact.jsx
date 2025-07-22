// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/preet2213084@akgec.ac.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _captcha: "false",
          _template: "table",
          _subject: "Grameenkala Contact Form Submission"
        })
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Us</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">We'd love to hear from you!</h3>
          <p className="contact__details">
            Have questions about our artisans or their crafts? Reach out below. 🌿
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-div">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="contact__form-input"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>

          {isSent && (
            <p style={{ marginTop: "1rem", color: "green" }}>
              ✅ Your message has been sent. Thank you for contacting Grameenkala!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
