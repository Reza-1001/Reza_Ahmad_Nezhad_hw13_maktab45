const express = require('express');
const user = express.Router();
const path = require('path');


// router.use('/test')
user.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,"..","public",`${req.url}.html`));
    
});
user.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,"..","public",`${req.url}.html`));
    
});
user.get('/archive', (req, res) => {
    res.sendFile(path.join(__dirname,"..","public",`${req.url}.html`));
    
});
user.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,"..","public",`${req.url}-us.html`));
});
user.get('/', (req, res) => {
    res.write("Page not Found!!!");
});



module.exports = user;