// import express
const express = require('express');

// create express app
const app = express();

// set up port that express app listens for requests on
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});




/* ===================================== Exercise 1 ======================================== */
/* 
Be Polite, Greet the User
Task: Create a route that responds to URLs like /greetings/<username-parameter>.

Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”
*/

// use url: localhost:3000/greet/claire
app.get(`/greetings/:name`, (req, res) => {
    // access parameter
    const name = req.query.name;
    // send response with the parameter
    res.send(`What a pleasure it is to see you again, ${req.params.name}!`)
})






/* ===================================== Exercise 2 ======================================== */
/* 
Rolling the Dice
Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

Examples: Matches routes like /roll/6 or /roll/20.

Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number.
For example, a request to /roll/16 might respond with “You rolled a 14.”
*/
// use url: localhost:3000/roll
app.get(`/roll/:number`, (req, res) => {
    const number = req.params.number;
    if (typeOf number !== 'number'){ // if not a number, print
        return('You must specify a number');
    }
    else { // if it is a number, do this
        answer = 0
        return(answer);
    }
})



















/* ===================================== Exercise 3 ======================================== */
/*
Task: Create a route for URLs like /collectibles/<index-parameter>.
Examples: Matches routes such as /collectibles/2 or /collectibles/0.
Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” 
Include both the name and price properties.
*/

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];






/* ===================================== Exercise 4 ======================================== */
/*
Task: Create a route /shoes that filters the list of shoes based on query parameters.
Query Parameters:
    - min-price: Excludes shoes below this price.
    - max-price: Excludes shoes above this price.
    - type: Shows only shoes of the specified type.
    - No parameters: Responds with the full list of shoes.
*/
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
