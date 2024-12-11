import React from "react";
import concerts from "./concerts"; // Import concerts.js
import "./App.css";

function BuyProducts() {
    return (
        <div className="BuyProducts">
            <h1>End of the Year Sale</h1>
            {concerts.map((concert) => (
                <div key={concert.month}>
                    <h2>
                        {concert.month}: {concert.venue}, {concert.artist}
                    </h2>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        {concert.products.map((product) => (
                            <div
                                key={product.id}
                                style={{
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <img
                                    src={product.image} // Ensure this matches the "/images/" path
                                    alt={product.type}
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                />
                                <p>{product.type}</p>
                                <p>Price: ${product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BuyProducts;