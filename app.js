const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.send("Hello World, I am mr.omar");
});
app.listen(3020,() => {
console.log("Server is running on port 3020")

