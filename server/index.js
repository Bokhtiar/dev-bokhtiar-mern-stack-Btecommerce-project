const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require(docenv)
const fileupload = require('express-fileupload')


dotenv.config()
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

// app.use('/uploads/', express.static('uploads/'))
// app.use('/uploads/category', express.static('uploads/category/'))

app.use('/api/v1')
