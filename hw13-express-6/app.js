const express = require('express');
const app = express();
const path = require('path');
const fs=require('fs');
app.use('/', (req, res) => {
    if(fs.existsSync(path.join(__dirname, 'pages',req.url))) // check if file exists
        res.sendFile(path.join(__dirname, 'pages',req.url)) //return file as response
    else
        res.end("Path not found!");
}).listen(5000, () => {
    console.log("server is running on port 5000 ...");
});

