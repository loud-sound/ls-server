const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('OK');
});

const port = 6969;

app.listen(port, () => {
    console.log(`Server is listening on *:${port}...`);
});