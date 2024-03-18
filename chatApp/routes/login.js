const express= require('express')
const router = express.Router()
const path= require('path')

const rootDir=require('../path/path')

router.get('/login',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','login.html'))
})

// router.post('/login',(req,res)=>{
//     console.log(req.body)
//     res.redirect('/')
// })

module.exports=router;