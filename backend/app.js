const express = require('express')
const bodyParse = require('body-parser')
const cors = require("cors");

const app = express()
app.use(cors())


app.use(bodyParse.json())
const db = require('./db.js')
app.use('/api',require('./api'))
app.get('**',(req,res)=>{
    res.send('hello')
})
app.listen(8000,()=>{
    console.log('Server is running on 8000 port.')
})