const express = require('express');
const uuid = require("uuid");
const PORT = process.env.PORT ||3001;
const app = express();
const router = express.Router();


// Middleware to use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// tells application to use the routes provided
// app.use(api_route);
// app.use(html_route);
app.use("/",require('./routes/html'));
app.use("/api", require('./routes/api'));



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );