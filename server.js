const express = require('express');

const uuid = require("uuid");
const PORT = process.env.PORT ||3001;
const app = express();


// Middleware to use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// tells application to use the routes provided
// app.use(api_route);
// app.use(html_route);
require('/routes/api.js')(app);
require('/routes/html.js')(app);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );