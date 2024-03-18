const express = require('express')
const app= express()
const path= require('path')

const adminRoutes = require('./routes/admin') //relative path
const shopRoutes = require('./routes/shop')

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

app. use('/', (req,res,next)=>{
   console.log('this always runs')
   next();
})

app.use('/admin',adminRoutes)

app.use(shopRoutes)

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))
})


app.listen(8000)