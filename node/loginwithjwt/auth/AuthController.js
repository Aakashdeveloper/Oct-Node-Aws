const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
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

//loginUser
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send('Error while login');
        if(!user) return res.status(400).send('No User Found Register First');
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.status(401).send('Invalid Password');
            var token = jwt.sign({id:user._id},config.secert,{expiresIn:86400})
            res.send({auth:true,token:token})
        }
    })
});

//UserInfo
router.get('/userinfo',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.send({auth:false,token:'No Token Provided'})
    jwt.verify(token,config.secert,(err,data)=>{
        if(err) return res.status(500).send({auth:false,token:'Invalid Token Provided'});
        User.findById(data.id,{password:0},(err,user)=>{
            res.send(user)
        })
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