require('dotenv').config();
const express = require("express");
const app = express();
app.get("/", (request, response) => {
     
    response.send("<h1>Hello World</h1>");
});
app.get("/about", (request, response) => {
     
    response.send({name: process.env.NAME, age: process.env.AGE, sex: process.env.SEX});
});
app.listen(3000);
