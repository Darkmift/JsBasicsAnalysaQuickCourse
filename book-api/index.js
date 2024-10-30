const express = require('express');
const cors = require('cors');
const app = express();
const books = require('./data/books.js');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/books', function (req, res) {
  res.json(books);
});

app
  .get('/foo', function (req, res) {
    res.send('Hello Tomer!!');
  })
  .post('/foo', function (req, res) {
    res.send('Hello Levi!!');
  });

app.listen(3000);
