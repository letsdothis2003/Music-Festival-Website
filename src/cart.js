import React from 'react';
import './App.css';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="CartContainer">
      <h1>🛒 Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="EmptyCart">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your cart is empty</h2>
          <p>Browse our collection and add some amazing items!</p>
          <a href="/buyproducts" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease-in-out'
          }}>
            Continue Shopping
          </a>
        </div>
      ) : (
        <div>
          <div className="CartItems">
            {cart.map((item, index) => (
              <div key={index} className="CartItem">
                <div>
                  <h3>{item.type}</h3>
                </div>
                <div>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                </div>
                <div>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                </div>
                <div>
                  <p><strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>

          <div className="CartSummary">
            <h2>Order Summary</h2>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '1rem 0',
              borderBottom: '2px solid #ecf0f1'
            }}>
              <span>Items ({cart.length}):</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '1rem 0',
              borderBottom: '2px solid #ecf0f1'
            }}>
              <span>Shipping:</span>
              <span>FREE</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '1rem 0',
              fontSize: '0.9rem'
            }}>
              <span>Tax (est.):</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className="TotalPrice" style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              borderTop: '2px solid #34495e',
              paddingTop: '1rem'
            }}>
              <span>Total:</span>
              <span>${(totalPrice * 1.08).toFixed(2)}</span>
            </div>
            <button className="CheckoutBtn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
