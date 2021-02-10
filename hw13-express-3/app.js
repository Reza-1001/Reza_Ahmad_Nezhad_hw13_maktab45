const express = require('express');
const app = express();
const user = require('./routes/user');

app.get('/', (req, res) => { 
    res.end("Page not Found!!!");
});
app.use('/user', user);
app.listen(5000, () => {
    console.log("server is running on port 5000 ...");
})