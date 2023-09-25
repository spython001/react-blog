const express = require("express");
const app = express();

app.use("/", (req, res)=> {
    console.log('This is the boss');
})


app.listen("5000", () =>{
    console.log('Backend server is running');
})