const express = require("express");
const app = express();
const port = 8000;



// app.get("/", (req,res) => res.send("Hello World"));
// app.get("/about", (req,res) => res.send("<h1>This is the about page</h1>"));
// app.get("/contact", (req,res) => res.send("<h1>This is the contact page</h1>  Email: RG123@gmail.com    Mobile: 9876542321"));
const mainRoutes = require("./routes/main");
app.use('/',mainRoutes); // this helps me link to my roueter so that it can show all my routes by importing



app.listen(port,
    () =>console.log(`Node server is running on port ${port}...`)
);