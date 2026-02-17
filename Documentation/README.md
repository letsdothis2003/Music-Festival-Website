This project was created with the collaborative efforts of Jamal Siddiqui, Fahim Tanvir and Steven Campeche. 

This is a website intended to be a generic music festival booking website, which includes a merch store. This is implemented using Stripe API to ensure people can actually buy stuff using their credit card seemelessly. The actual website itself uses React as it's frontend, Nodejs as its backend and Mongodb for database. The file imports necessary modules such as express for creating a server, cors for handling cross-origin requests, stripe for integrating Stripe payment services, and mongodb for connecting to a MongoDB database.


This video provides a demonstration of the website and how it works:
https://www.youtube.com/watch?v=cw2nTkOSVmQ

If you look through the code:


Imports and Setup:
The file imports necessary modules such as express for creating a server, cors for handling cross-origin requests, stripe for integrating Stripe payment services, and mongodb for connecting to a MongoDB database.
A new MongoClient is initialized to connect to the MongoDB instance with the given URI.


Middleware:
The express.json() middleware is used to parse incoming JSON requests.
cors middleware allows the server to handle requests from different origins, enabling frontend-backend communication.


MongoDB Connection:
The server connects to a MongoDB database using the provided connection string.
Upon a successful connection, it logs a confirmation message. If the connection fails, it logs an error and exits the process.


Database and Collection:
The code initializes access to the ecommerce database and the orders collection to store order information.


Payment Intent Endpoint:
The /create-payment-intent endpoint listens for POST requests.
It extracts items, the total amount, and user information from the request body.
A Stripe PaymentIntent is created to manage the payment process, with the total amount converted to cents (as Stripe expects).
The cart details, total amount, user information, and a timestamp are saved in the MongoDB database as an order document.


Error Handling:
If the payment intent creation or database insertion fails, the server responds with a 500 status and logs the error.


Server Initialization:
The server starts on port 5000 and logs a confirmation message with the server's URL (http://localhost:5000).
This server.js file acts as a bridge between the frontend and the backend. It manages payment transactions through Stripe and ensures that order data is securely saved in MongoDB. It is essential for processing payments, validating user inputs, and maintaining a record of purchases.

Besides that, this website's purpose is to serve as a template for if anyone or any group needs to make a community or event style website that has to have a merch store. 

