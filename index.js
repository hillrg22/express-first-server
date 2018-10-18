const express = require('express')
const app = express()
const port = 3000
const people = require ('./people')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())


app.listen(port,() =>{
  console.log(`I got you on ${port}`)
})


app.get('/', (req,res,next) =>{
  res.send('Hi there')
})
