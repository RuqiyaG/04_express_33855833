const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>res.send("Hello World"));
router.get("/about", (req,res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req,res) => res.send("<h1>This is the contact page</h1>  Email: RG123@gmail.com    Mobile: 9876542321"));
router.get("/date", (req,res) => res.send("<h1>Today's Date is...</h1>"))

module.exports = router;