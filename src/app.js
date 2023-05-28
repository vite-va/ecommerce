require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet');
const compression = require('compression');
const { urlencoded } = require('express');
const { json } = require('express/lib/response');
const app = express();

// Init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Init db
require('./dbs/init.mongodb')
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

// Init routes
app.use('/', require('./routes'))

module.exports = app