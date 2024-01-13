//implement express
const express = require('express');

//creating a folder and file to store our data
const mongodb = require('./data/database');

const app = express();

//setting port to 3000
const port = process.env.PORT || 3000;

//this is to include the folder routes when we need code from routes
app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    
    }
    else {
        app.listen(port, () => {
            console.log(`Database and node is running on port ${port})`)});
    }

});