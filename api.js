const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var cors = require('cors')

const config = require('./config')
const api = require('./routes')

//middlewares
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/api', api)

//server
app.listen(config.port, () => {
  console.log(`API REST running on http://localhost:${config.port}`)
})