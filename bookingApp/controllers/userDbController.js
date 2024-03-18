const user = require('../models/User')
const path = require('path')
// const {json} = require('body-parser')


exports.showForm =  (req,res)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'index.html'))
}

exports.addUser = (req,res)=>{
    console.log('add') 
    try{
    console.log('request body')
    console.log(req.body)
    
     const name = req.body.name 
     const email = req.body.email 
     const phone = req.body.phone 
 
     user.create({
      name:name,
      email:email,
      phone:phone 
     })
     .then((data)=>{
        console.log('data')
        console.log(data)
      res.status(201).json(data)  
     })
    }
    catch(err){ 
     res.status(500).json({
        error:err
     }) 
    }

}

exports.getAllUsers= (req,res)=>{
    try{
      user.findAll()
      .then(result=>{
        console.log(result)
        res.status(201).json(result)
      })
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}



exports.deleteUser= (req, res)=>{
    try{
     const userid= req.params.id
     user.findByPk(userid)
     .then(user=>{
       return user.destroy()
     })
     .then(result=>{
        res.status(201).json({
            deleteduser:result
        })
     })
    }
    catch(err){
        res.status(500).json({
            error:err
         })
    }
}