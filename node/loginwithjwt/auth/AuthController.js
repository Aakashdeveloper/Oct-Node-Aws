const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = request('bcryptjs')
const config = require('../config');
const User = require('./UserSchema');

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json());

//Register
router.post('/register',(req,res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password,8)
    User.create({
        name:req.body.name,
        password:hashedPassword,
        email:req.body.email,
        role:req.body.role?req.body.role:'User',
    },(err,user)=>{
        if(err) return res.status(500).send('Error')
        res.status(200).send('Registration success')
    })
})


///get All user list
router.get('/users',(req,res)=>{
    User.find({},(err,user) => {
        if(err) throw err;
        res.send(user)
    })
})


module.exports = router