const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./express-routes");

app.use(bodyParser.json());

app.use(routes);

app.get("/", (req, res) => {
    return res.json("Start with /items");
});

app.listen(3002, () => {
    console.log("Server is listening on port 3000");
});