require('dotenv').config()
const express = require('express')

const bookRoute = require('./routes/bookRoute');

const app = express();

app.use(express.json())



// Book route
app.use('/books', bookRoute)



const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server started at ${PORT}`))