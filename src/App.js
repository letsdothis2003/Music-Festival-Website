import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Contact from './contact';
import Locations from './locations';
import BuyProducts from './buyproducts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/buyproducts" element={<BuyProducts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

