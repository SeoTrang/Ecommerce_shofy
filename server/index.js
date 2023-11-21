const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(express.static('public'))
var morgan = require('morgan')
 
// create "middleware"
// var logger = morgan('combined')
app.use(morgan('dev'));

const db = require('./config/db');
const route = require('./routes/index.js');


const PORT = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors({ origin: '*' })); // Sử dụng cors và chấp nhận tất cả các origin (*)

route(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
