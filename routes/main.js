const express = require("express");
const router = express.Router(); // helps keep my code orgsinsed in a seperate folder

router.get("/",(req,res) =>res.send("Hello World")); //router.get compared to app.get strcuture of code is similar
router.get("/about", (req,res) => res.send("<h1>This is the about page</h1> <p>My name is Ruqiya and I am in my second year trying to improve my techinal skill and focusing on backend while before I was used to more front end developing excited to see how this goes and what I can learn. Currently trying to develop a web application using express for the first time<p/>"));
router.get("/contact", (req,res) => res.send("<h1>This is the contact page</h1>  <p> <strong>Email:</strong> RG123@gmail.com<br><br>    <strong>Mobile:</strong> 9876542321</p>"));
router.get("/welcome/:ruqiya", (req,res) => {const name = req.params.ruqiya; // has to adjust the req.params slightly to hold my name otherwise there woulde be an error
    res.send(`Welcome`);});

module.exports = router;