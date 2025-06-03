import React, { useRef } from 'react';

function Contact() {
  const formRef = useRef();

  const handleMailTo = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:darsan.jalal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-info">
        <ul>
          <li><strong>Email:</strong> <a href="mailto:darsan.jalal@gmail.com">darsan.jalal@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/darsan-jalal-18aa0b140/" target="_blank" rel="noopener noreferrer">Darsan Jalal</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/XxdarsanxX" target="_blank" rel="noopener noreferrer">XxdarsanxX</a></li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send me a message</h2>
        <form ref={formRef} onSubmit={handleMailTo}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="pixel-btn">Email Me</button>
        </form>
        <p style={{fontSize: '0.9rem', color: '#c9ada7', marginTop: '12px'}}><em>(This will open your email client with a pre-filled message.)</em></p>
      </div>
    </div>
  );
}

export default Contact; 