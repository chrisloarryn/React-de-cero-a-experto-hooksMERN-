/**
 * Users Routes / Auth routes
 * host + /api/auth
 */

const express = require('express')
require('dotenv').config('./env')
const cors = require('cors')
const { dbConnection } = require('./database/config')

const port = process.env.PORT || 5000

// Create express server instance
const app = express()

// DB
dbConnection()

// CORS
app.use(cors())

// Public directory
app.use(express.static('public'))

// Read and parse response body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// Listen request
app.listen(port, () => {
  console.log(`Server running on port: '${port}'`)
})
