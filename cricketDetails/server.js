const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const path = require('path')
const sequelize = require('./util/database')
const cricketer = require('./models/cricketer')

app.use(express.static(path.join(__dirname,'public')))

app.post('/cricketer/add-detail', (req, res)=>{
    console.log('inside')
     
     console.log(req.body)
    cricketer.create({
        name:req.body.name,
        date:req.body.dob,
        url:req.body.url,
        birthplace:req.body.birthplace,
        career:req.body.career,
        matches:req.body.numMatches,
        score:req.body.score,
        fifties:req.body.fifties,
        centuries:req.body.centuries,
        wicket:req.body.wicket,
        average:req.body.average
    })
    .then((result)=>{
        console.log(result)
        res.status(201).json(result)
    })
    .catch((err)=>{
        console.log('error aaya h')
        console.log(err)
        res.status(500).json('internal server error')
    })
})

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/cricketer/search-detail/:name', (req,res)=>{
    const key = req.params.name
    cricketer.findOne({where:{name:key}})
    .then((result)=>{
        // console.log(result)
        res.status(200).json(result)
    })
})



sequelize.sync()
.then(()=>{
    app.listen(3000,()=>{console.log('running')})
})