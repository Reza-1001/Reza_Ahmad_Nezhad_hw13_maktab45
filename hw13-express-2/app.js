const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
app.use('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.listen(5008, () => {
    console.log("server is running on port 5005 ...");
})