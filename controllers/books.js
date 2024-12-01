const Book = require('../models/book.js');

const index = (req, res) => {
    res.render('index.ejs')
};

const bookIndex = async (req, res) => {
    const books = await Book.find();
    res.render('./books/book-index.ejs', {books});
};

const bookNew = (req, res) => {
    res.render('books/new.ejs');
};

const bookCreate = async (req, res) => {
    if (req.body.read === "on") {
        req.body.read = true;
    } else {
        req.body.read = false;
    };
    await Book.create(req.body);
    res.redirect('/books');
};

const bookShow = async (req, res) => {
    const currentBook = await Book.findById(req.params.bookId);
    res.render('books/show.ejs', {book: currentBook});
};

const bookEdit = async (req, res) => {
    const currentBook = await Book.findById(req.params.bookId);
    res.render('books/edit.ejs', {book: currentBook});
};

const bookUpdate = async (req, res) => {
    if (req.body.read === "on") {
        req.body.read = true;
    } else {
        req.body.read = false;
    };
    await Book.findByIdAndUpdate(req.params.bookId, req.body);
    res.redirect(`/books/${req.params.bookId}`);
};

const bookDelete = async (req, res) => {
    await Book.findByIdAndDelete(req.params.bookId);
    res.redirect("/books");
};

module.exports = {
    index,
    bookIndex,
    bookNew,
    bookCreate,
    bookShow,
    bookEdit,
    bookUpdate,
    bookDelete
};