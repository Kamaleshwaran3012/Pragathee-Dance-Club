import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./contact.css"; // Import the CSS file
import contimage from "../assets/contact.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.reason ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitted(true);
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className="contclass1">
        <p>CONTACT US→</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <img src={contimage} id="contimage" alt="Contact Banner" className="contact-image" />
          <h2 className="contact-title">Contact Us</h2>
          <p><FaMapMarkerAlt className="icon" /> Kalanjiyam Nagar, Kallakurichi-606213.</p>
          <p><FaPhoneAlt className="icon" /> +91 7904520611</p>
          <p><FaEnvelope className="icon" /> pragatheedanceclub@gmail.com</p>
          <p><FaGlobe className="icon" /> www.pragatheedanceclub.com</p>
        </div>

        <div className="contact-box">
          {submitted ? (
            <div className="success-message">
              ✅ Thank you! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="name-row">
                <div>
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            <div className="inforow">
              <div>
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              </div>
              <div>
                <label>Reason for Contact*</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Class Enrollment">Class Enrollment</option>
                  <option value="Trial Class">Trial Class</option>
                  <option value="Private Lessons">Private Lessons</option>
                  <option value="Event Booking">Event Booking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label>Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
