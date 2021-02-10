const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send("<h1 style='color:red;'>Hellow World!</h1>")
});

app.listen(5000, () => {
    console.log("server is running on port 5000 ...");
})