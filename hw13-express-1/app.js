const express = require('express');
const app = express();

app.use('/', (req, res) => { 
    res.send("Hellow World!")
});

app.listen(5000, () => {
    console.log("server is running on port 5000 ...");
})