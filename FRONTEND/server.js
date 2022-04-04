const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
if (dotenv.error)
    throw error

app.use(express.static('dist/wordle42'))

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
