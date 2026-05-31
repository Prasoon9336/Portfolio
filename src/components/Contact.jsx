import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('Please fill out all fields');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container py-4 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-content">
              <h2 className="fw-bold text-center mb-3">Get In Touch</h2>
              <p className="text-center text-light-50 mb-5">
                I'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status && (
                  <div className={`alert ${status.includes('successfully') ? 'alert-success' : 'alert-warning'} mb-4`} role="alert">
                    {status}
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Send Message
                </button>
              </form>

              <div className="contact-links mt-5 pt-5 border-top border-secondary text-center">
                <h4 className="fw-bold mb-4">Or connect with me on</h4>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="https://github.com/prasoon9336" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-github me-2"></i>GitHub
                  </a>
                  <a href="https://instagram.com/prasoon._.2004/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                    <i className="bi bi-instagram me-2"></i>Instagram
                  </a>
                  <a href="mailto:prasoonsrivastava44@gmail.com" className="btn btn-outline-light">
                    <i className="bi bi-envelope me-2"></i>Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
