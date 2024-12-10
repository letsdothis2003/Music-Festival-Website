import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tourlocations">Tour Locations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/buytickets">Buy Tickets</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

