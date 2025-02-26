const express = require('express');
const app = express();
const cors = require('cors');
const PORT = '8080';
const corsOptions = { origin: "http://localhost:5173" };
const bodyParser = require('body-parser');
const fs = require('fs');


app.use(cors(corsOptions));
app.use(bodyParser.json());

const db = fs.readFileSync('data/data.json');
const data = JSON.parse(db);


app.get('/home', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});