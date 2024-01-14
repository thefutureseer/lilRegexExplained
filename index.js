//bring in express
const express = require('express');

//bring in body parser
const bodyparser = require('body-parser');

//(File System) module, which provides 
//functions to interact with the file system.
const fs = require('fs');

//bring in path
const path = require('path');

//Create an instance of the Express application.
const app = express();

//set a path to serve the public file
const publicPath = path.join(__dirname, 'public');


//set port number or deployed port
const PORT = process.env.PORT || 8080;

//add globally to the application, 
//allowing it parses the body of 
//incoming HTTP requests / JSON data 
//in the request body & any route handler.
app.use(bodyparser.json());

//server static files from the public folder
//joining them from this file to the public folder
app.use(express.static(publicPath));


// Define a route for handling POST 
//requests to the /addText endpoint.
// This route expects JSON data 
//in the request body and appends 
//the received text to the README.md file.
app.post('/addText', (req, res) => {
  const newText = req.body.text;

  // Append the new text to README.md
  fs.appendFileSync(path.join(publicPath, 'README.md'), `\n${newText}\n`, 'utf8');

  res.status(200).send('Text added successfully.');
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'views/index.html'));
});

app.listen(PORT, ()=>{
  console.log(`go to localhost ${PORT}`)
});