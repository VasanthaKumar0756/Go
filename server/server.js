const express = require('express');
const app = express();
const cors = require('cors');
const PORT = '8080';
const corsOptions = { origin: "http://localhost:5173" };


app.use(cors(corsOptions));

app.get('/home', (req, res) => {
    res.json({ "fruits": ['apple', 'orange', 'grapes'] });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});