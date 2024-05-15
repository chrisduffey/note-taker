const express = require('express');
const PORT = 3001;
const app = express();
const fs = require("fs");
const uuid = require("uuid");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));








app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );