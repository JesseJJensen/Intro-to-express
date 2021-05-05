
// Imports
const express = require('express');
const app = express(); // instance of the app
const axios = require('axios');

// Home route
app.get('/', function(req, res) {
    // access a database if needed
    // make some logic based off what is inside of request
    // access an API and return some data
    // send a response at the end
    res.send('Hello World!');
});



// const sei = (req, res) => {
//     res.send('SEI 412');
// }

// app.get('/sei', sei);


app.get('/rockets', (req, res) => {
    // access an API and return some data
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
        // within this block of code
        // ---- start -----
        console.log(response.data);
        res.json(response.data);
        // ---- finish -----
    })
    .catch(error => {
        console.log(error);
    })
})

app.get('/greet/:name', (req, res) => {
    console.log(req.params); // req.params (object) => :name
    res.send(`Hello ${req.params.name}`);
});

app.get('/github/:username', (req, res) => {
    const { username } = req.params; // destructuring
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// IMPORTANT: Make last route
app.get('/*', (req, res) => {
    
    res.send('404');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} 🎧`);
});

// Terminal Commands Used
// npm init -y
// npm i express
// npm i -g nodemon
// npm start
// npm i axios 
// control c 

// Browser Commands Used 
// Turn server on by `npm start` or `nodemon`
// http://localhost:8000/rockets  search in browser
