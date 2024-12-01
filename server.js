// Import Modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Database
require('./config/database.js');

const Book = require("./models/book.js");

const app = express();

// Controllers
const bookCtrl = require('./controllers/books.js');

// Middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Routes
app.get('/', bookCtrl.index);

app.get('/books', bookCtrl.bookIndex);

app.get('/books/new', bookCtrl.bookNew);

app.post('/books', bookCtrl.bookCreate);

app.get('/books/:bookId', bookCtrl.bookShow);

app.get('/books/:bookId/edit', bookCtrl.bookEdit);

app.put('/books/:bookId', bookCtrl.bookUpdate);

app.delete('/books/:bookId', bookCtrl.bookDelete);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});