import React from 'react';
import './App.css';

function Location() {
  return (
    <div className="Location">
      <header className="Location-header">
        <h1>Discover Music Events in NYC</h1>
        <p>
          New York City is alive with the sounds of music! Check out these unique events happening across the city.
        </p>
        <ul className="Event-list">
          <li>
            <strong>Vinyl Haven Pop-Up</strong>
            <p>Dive into the world of rare records at this collector's paradise.</p>
            <div>
              <em>Location:</em> Soundwave Lounge, Brooklyn, NY
            </div>
            <div>
              <em>Date:</em> Saturday, Dec 16, 2024
            </div>
          </li>
          <li>
            <strong>Moonlit Jazz Gala</strong>
            <p>Enjoy a magical evening of smooth jazz under a canopy of stars.</p>
            <div>
              <em>Location:</em> Central Park Amphitheater, Manhattan, NY
            </div>
            <div>
              <em>Date:</em> Friday, Dec 22, 2024
            </div>
          </li>
          <li>
            <strong>Global Rhythms Festival</strong>
            <p>Celebrate diverse musical traditions from around the globe.</p>
            <div>
              <em>Location:</em> Queens Cultural Center, Queens, NY
            </div>
            <div>
              <em>Date:</em> Monday, Jan 8, 2025
            </div>
          </li>
          <li>
            <strong>Melody Makers Workshop</strong>
            <p>Create your own tunes at this interactive music-making event.</p>
            <div>
              <em>Location:</em> Artistry Studio, Williamsburg, Brooklyn, NY
            </div>
            <div>
              <em>Date:</em> Sunday, Jan 14, 2025
            </div>
          </li>
          <li>
            <strong>Symphony in the Park</strong>
            <p>Experience a live orchestra with breathtaking views of the city skyline.</p>
            <div>
              <em>Location:</em> Battery Park, Manhattan, NY
            </div>
            <div>
              <em>Date:</em> Saturday, Feb 3, 2025
            </div>
          </li>
        </ul>
        <p>
          The beat of New York City awaits you. Mark your calendar and be part of these unforgettable events!
        </p>
      </header>
    </div>
  );
}

export default Location;
