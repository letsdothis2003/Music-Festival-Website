import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import Locations from "./locations";
import BuyProducts from "./buyproducts";
import Cart from "./cart";

function App() {
  const [cart, setCart] = useState([]); // State to hold cart items

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="App">
        <Navbar cart={cart} /> {/* Pass cart as a prop to Navbar */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/buyproducts" element={<BuyProducts cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
