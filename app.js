//implement express
const express = require('express');
const app = express();

//setting port to 3000
const port = process.env.PORT || 3000;

//this is to include the folder routes when we need code from routes
app.use('/', require('./routes'));

//listen for traffic and set port up
app.listen(port, () => {console.log(`Running on port ${port})`)});

