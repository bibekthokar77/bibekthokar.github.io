require('dotenv').config();

const express = require('express');
const path = require('path');

const productRouter = require('./routes/products')
const userRouter = require('./routes/users')


const app = express();


// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'assets', 'views', 'home.html'))
// })

app.use('/css', express.static(path.join(__dirname, 'public', 'assets', 'css')))
app.use('/js', express.static(path.join(__dirname, 'public', 'assets', 'js')))


app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.use('/products', productRouter)
app.use('/users', userRouter)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.use((error, req, res, next) => {
    res.status(500).json({ error: error })
})



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started at port ${PORT} in ${process.env.NODE_ENV}`))