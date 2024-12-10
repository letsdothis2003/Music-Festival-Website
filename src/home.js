import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to the Wheezer!</h1>
        <p>
         Home of local NYC music-related events! You can find musical events and memorabillia in areas near you!
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
