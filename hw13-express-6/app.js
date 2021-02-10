const express = require('express');
const app = express();
const path = require('path');
const fs=require('fs');
app.use('/', (req, res) => {
    if(fs.existsSync(path.join(__dirname, 'pages',req.url)))
        res.sendFile(path.join(__dirname, 'pages',req.url))
    else
        res.end("Path not found!");
}).listen(5000, () => {
    console.log("server is running on port 5000 ...");
});

