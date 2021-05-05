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
const sei = (req, res) => {
    res.send('SEI 412');
}
app.get('/sei', sei);
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
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} 🎧`);
});