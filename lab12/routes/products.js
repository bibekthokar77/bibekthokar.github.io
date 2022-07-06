const express = require('express')
const path = require('path')

const router = express.Router()


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'))
})

router.post('/', (req, res) => {
    res.send("<h1>Product Post request</h1>")
})

module.exports = router;