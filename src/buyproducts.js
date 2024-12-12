import React, { useState } from 'react';
import concerts from './concerts';
import './App.css';

function BuyProducts({ cart, setCart }) {
    // State to track quantities of all products
    const [quantities, setQuantities] = useState({});

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
        alert(`${quantity} ${product.type}(s) added to the cart!`);
    };

    return (
        <div className="BuyProducts">
            <h1>End of the Year Sale</h1>
            {concerts.map((concert) => (
                <div key={concert.month}>
                    <h2>
                        {concert.month}: {concert.venue}, {concert.artist}
                    </h2>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {concert.products.map((product) => (
                            <div
                                key={product.id}
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.type}
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <p>{product.type}</p>
                                <p>Price: ${product.price}</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                                    <span>{quantities[product.id] || 1}</span>
                                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    style={{
                                        marginTop: '10px',
                                        padding: '5px 10px',
                                        background: 'black',
                                        color: 'white',
                                    }}
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
