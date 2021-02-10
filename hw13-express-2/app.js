const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.get('/main.js', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/main.js'))
});
app.get('/style.css', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/style.css'))
});
app.get('/photo.jpg', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/photo.jpg'))
});
app.listen(5000, () => {
    console.log("server is running on port 5000 ...");
})