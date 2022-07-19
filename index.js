const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Hello world - DevOps Crash Course 2022");
    console.log("print in the server - tash CICD");
});

app.listen(3000);