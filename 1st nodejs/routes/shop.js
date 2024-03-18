const path = require('path')
const express= require('express');
const router = express.Router();

const rootdirpath = require('../helper/path')

router.get('/',(req,res,next)=>{
   res.sendFile(path.join(rootdirpath,'views','shop.html'))
 })

module.exports=router;