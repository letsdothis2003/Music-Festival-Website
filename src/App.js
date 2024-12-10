import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Contact from './contact';
import TourLocations from './tourlocations';
import BuyTickets from './buy-tickets';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tourlocations" element={<TourLocations />} />
            <Route path="/buytickets" element={<BuyTickets />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

