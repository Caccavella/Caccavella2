const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(cors());

// https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters

axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')



app.listen(3004, () => {
console.log("Listening on port 3004")
})