require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`=> Server ready on port ${PORT}`)
})