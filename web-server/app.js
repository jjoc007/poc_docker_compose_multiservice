const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.status(200).send('Pong!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
