//Imports
const express = require('express');
const app = express(); // instance of the app

// Home route
app.get('/', function(req, res) {
    res.send('Hello, World!'); // access a database if needed, make some logic, based off what is inside of request access on API
});

app.get('/sei', (req, res) => {
    res.send('SEI 412');
});




app.listen(8000, () => {
    console.log(`Server is listening on PORT 8000`);
});



// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`server is listening on ${PORT}`);
// });