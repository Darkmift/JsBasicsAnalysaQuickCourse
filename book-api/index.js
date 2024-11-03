const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
const books = require('./data/books.js');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/books', function (req, res) {
  res.json(books);
});

// make random 4 characters string
function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
  );
}

// /POST request to add a new book with validation
app.post('/books', function (req, res) {
  const newBook = req.body;
  console.log({ newBook });
  if (!newBook?.book_title || !newBook?.image) {
    return res.status(400).json({ msg: 'Please include a book_title, and image' });
  }

  newBook.id = uuidv4();
  books.push(newBook);
  res.json(books);
});

app.listen(3000);
