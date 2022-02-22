var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.end("hello world");
})

app.listen(5001, () =>
{
    console.log("App is listening on port 5001");
})