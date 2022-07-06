const express = require('express')
const path = require('path')

const router = express.Router()


router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

router.post('/', (req, res) => {
    res.send("<h1>Users Post request</h1>")
})

module.exports = router;