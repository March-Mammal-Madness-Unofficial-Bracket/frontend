//connects frontend and backend code

var express = require('express');
var ensureLogIn = require('connect-ensure-login').ensureLoggedIn;
var db = require('../db');

var ensureLoggedIn = ensureLogIn();

const express = require('express');
const cors = require('cors'); // npm install cors
const app = express();

app.use(express.json()); 
app.use(cors());

//app.get <- fetch
//app.post <- fetch


//fetch format from GET request; researched briefly but not sure if this is actually correct
fetch ('/api/brackets', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  }
});


const response = await fetch("backend.swiboe.org", { //additional port info unecessary
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" })

  //(working)
});


module.exports = router;