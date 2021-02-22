const express = require('express')

const port = process.env.PORT || 5000

// Create express server instance
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

// Listen request
app.listen(port, () => {
  console.log(`Server running on port: '${port}'`)
})
