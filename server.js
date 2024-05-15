const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const uuid = require("uuid");
const PORT = 3001;
const api = require('./routes/api')
const html = require('./routes/html')
const uuid = require('uuid');

// Middleware to use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// tells application to use the routes provided
app.use(api);
app.use(html);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );