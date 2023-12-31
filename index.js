const express = require('express');
// load env files
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server is running on ', port)
})