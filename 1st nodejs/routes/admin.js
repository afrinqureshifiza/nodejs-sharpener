const express= require('express');
const router = express.Router();
const path= require('path')

const rootdirpath = require('../helper/path')

router.get('/addproduct',(req,res,next)=>{
    console.log('in middleware1'); 
    res.sendFile(path.join(rootdirpath,'views','addProduct.html'));
   // next()
 })
 
 router.post('/addproduct',(req,res)=>{
    const {name, age}=req.body;
    console.log(name);
    console.log(age);
    console.log(req.body);
    res.redirect('/');
 })

module.exports=router;