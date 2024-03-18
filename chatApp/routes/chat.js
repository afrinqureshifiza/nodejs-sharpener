const express= require('express')
const router = express.Router()
const path= require('path')
const fs= require('fs')

const rootDir=require('../path/path')

router.get('/',(req,res)=>{

    fs.readFile('user.txt', (err,data)=>{
      if(err){
        console.log(err)
        data='No chats Exists'
      } 
       res.send(`<h1>Welcome to Chat Page</h1> 
       ${data}
       <form action="/" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
         <label for="">
           Add Chat :
           <input type="text" name="message" placeholder="message" id="message">
           <input type="hidden" name="username" id="username">
           <button type="submit">Send</button>
         </label>
       </form>`)
    })

   
})

router.post('/',(req,res)=>{

    console.log(`${req.body.username} : ${req.body.message}`)
    fs.writeFile('user.txt',
    `${req.body.username} : ${req.body.message}`,
     {flag:'a'},
     (err)=>{
        err ? (console.log(err)): (  console.log('file uploaded'))
    })
   
    res.redirect('/')
})

module.exports= router