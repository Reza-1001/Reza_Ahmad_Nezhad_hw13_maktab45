
const express = require('express');
const app = express();
const path = require('path');

app.get('/index1.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'pages/index1.html'))
});
app.get('/index2.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'pages/index2.html'))
});
app.get('/index3.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'pages/index3.html'))
});
app.get('/index4.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'pages/index4.html'))
});
app.get('/index5.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'pages/index5.html'))
});
app.use('/', (req, res) => { 
    res.end("Page not Found!!!")
});

app.listen(5000, () => {
    console.log("server is running on port 5000 ...");
})