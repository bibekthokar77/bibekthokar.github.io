const express = require('express')
const { createBook, getBookById, getBooks, deleteBook, updateBook } = require('../controllers/bookController')

const router = express.Router();

router.get('/', getBooks)
router.get('/:id', getBookById)
router.post('/', createBook)
router.delete('/:id', deleteBook)
router.put('/:id', updateBook)

module.exports = router

