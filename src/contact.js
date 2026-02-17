import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>📧 Get in Touch</h2>
      
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>📞 Customer Support</h3>
        <p>
          <strong>Phone:</strong> (248) 434-5508
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@thewheezer.com" style={{ color: '#e74c3c', fontWeight: '600' }}>info@thewheezer.com</a>
        </p>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>🏪 Store Hours</h3>
        <p><strong>Monday - Friday:</strong> 10:00 AM - 8:00 PM EST</p>
        <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM EST</p>
        <p><strong>Sunday:</strong> 12:00 PM - 5:00 PM EST</p>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>📍 Visit Us</h3>
        <p>
          <strong>The Wheezer - Brooklyn Store</strong><br/>
          123 Music Avenue<br/>
          Brooklyn, NY 11201<br/>
          USA
        </p>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        borderLeft: '4px solid #e74c3c'
      }}>
        <h3 style={{ color: '#2c3e50', marginTop: 0 }}>💬 Have Questions?</h3>
        <p>
          Our dedicated customer service team is here to help! Whether you have questions about our products, events, or shipping, don't hesitate to reach out. We typically respond within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default Contact;
