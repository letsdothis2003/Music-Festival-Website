import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>🎵 Welcome to The Wheezer! 🎵</h1>
        <p>
          Your ultimate destination for NYC music events and exclusive memorabilia. Discover rare vinyl records, concert merchandise, and unforgettable musical experiences from the vibrant heart of New York City.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/buyproducts" className="Home-link">
            Shop Now
          </Link>
          <Link to="/locations" className="Home-link" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'white', color: 'white' }}>
            Explore Events
          </Link>
        </div>
      </header>
      
      <section style={{ padding: '3rem 2rem', background: 'white', margin: '2rem auto', maxWidth: '1000px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎸 Exclusive Merchandise</h3>
            <p style={{ color: '#34495e' }}>Premium concert merchandise and vinyl records from legendary artists.</p>
          </div>
          <div>
            <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍 Local Events</h3>
            <p style={{ color: '#34495e' }}>Discover live music events, festivals, and intimate performances across NYC.</p>
          </div>
          <div>
            <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✨ Curated Deals</h3>
            <p style={{ color: '#34495e' }}>End-of-year sales on your favorite items at unbeatable prices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
