import React, { useState } from 'react';
import concerts from './concerts';
import './App.css';

function BuyProducts({ cart, setCart }) {
    // State to track quantities of all products
    const [quantities, setQuantities] = useState({});
    const [notification, setNotification] = useState('');

    // Handle changing the quantity of a product
    const updateQuantity = (productId, change) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: Math.max(1, (prev[productId] || 1) + change),
        }));
    };

    // Handle adding items to the cart
    const addToCart = (product) => {
        const quantity = quantities[product.id] || 1;
        setCart((prevCart) => [...prevCart, { ...product, quantity }]);
        
        // Show notification
        setNotification(`✓ Added ${quantity} ${product.type}(s) to cart!`);
        setTimeout(() => setNotification(''), 3000);
        
        // Reset quantity for this product
        setQuantities((prev) => ({
            ...prev,
            [product.id]: 1,
        }));
    };

    return (
        <div className="BuyProducts">
            <h1>🎄 End of the Year Sale 🎄</h1>
            
            {notification && (
                <div style={{
                    position: 'fixed',
                    top: '80px',
                    right: '20px',
                    backgroundColor: '#27ae60',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    zIndex: 1000,
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    {notification}
                </div>
            )}

            {concerts.map((concert) => (
                <div key={concert.month} style={{ marginBottom: '3rem' }}>
                    <h2>
                        🎤 {concert.month}: {concert.venue}, {concert.artist}
                    </h2>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                        gap: '2rem',
                        margin: '1.5rem auto',
                        maxWidth: '1400px',
                        justifyItems: 'center'
                    }}>
                        {concert.products.map((product) => (
                            <div key={product.id} className="ProductCard">
                                <img
                                    src={product.image}
                                    alt={product.type}
                                />
                                <p>{product.type}</p>
                                <p>${product.price.toFixed(2)}</p>
                                
                                <div className="QuantityControl">
                                    <button onClick={() => updateQuantity(product.id, -1)}>−</button>
                                    <span>{quantities[product.id] || 1}</span>
                                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                                </div>
                                
                                <button
                                    className="AddToCartBtn"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BuyProducts;
