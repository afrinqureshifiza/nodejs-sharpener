const express = require('express')
const app = express()
const path= require('path')



const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const chatRoute = require('./routes/chat')
const loginRoute = require('./routes/login')

app.use(chatRoute)
app.use(loginRoute)


app.listen(3000)