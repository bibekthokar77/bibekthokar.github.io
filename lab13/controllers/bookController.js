const Book = require("../models/bookModel");


exports.createBook = (req, res) => {
    const { id, title, isbn, publishedDate, author } = req.body;

    const createdBook = new Book(id, title, isbn, publishedDate, author)

    res.status(201).json(createdBook.save())

}


exports.updateBook = (req, res) => {
    const { id } = req.params
    const { id: _id, title, isbn, publishedDate, author } = req.body;
    const updatedBook = new Book(id, title, isbn, publishedDate, author)
    res.status(201).json(updatedBook.update())

}

exports.getBooks = (req, res) => {
    res.status(200).json(Book.getAll())
}

exports.getBookById = (req, res) => {
    const { id } = req.params;
    res.status(200).json(Book.getById(id));
}

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    Book.delete(id)
    res.status(200).send();
}
