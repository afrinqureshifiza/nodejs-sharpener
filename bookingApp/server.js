const express = require('express')
const app = express()
app.use(express.json())
const path = require('path')
const cors = require('cors')

const sequelize = require('./util/databse.js')
const controller = require('./controllers/userDbController.js')

const user = require('./models/User')
const router = require('./routes/admin.js')
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/user', router)

app.get('/', controller.showForm)

sequelize.sync()
.then(()=>{
app.listen(3000, ()=>{
    console.log("server Started running")
})   
})
