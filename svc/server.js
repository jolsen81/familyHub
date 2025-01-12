const express = require('express')
const connectToDatabase = require("./db/db")
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080
const baseRoutes = require('./routes/baseRoutes')
const userRoutes = require('./routes/userRoutes')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(cors())
app.use(express.json())

app.use(allowCrossDomain)

connectToDatabase()

app.use('/', baseRoutes)
app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})