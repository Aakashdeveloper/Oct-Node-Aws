const express = require('express')
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 8990;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
});

app.get('/profile',(req,res)=>{
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Error on login'
        })
    }
    superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id:'97daea38def938b4ae9f',
        client_secret:'244bee03c7414f60a9a594381df8025c02e02eef',
        code:code
    })
    .set('Accept','application/json')
    .end((err,result) => {
        if(err) throw err;
        var accesstoken =result.body.access_token
        const option={
            url:'https://api.github.com/user',
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Authorization':'token '+accesstoken,
                'User-Agent':'Oct-Node'
            }
        }
        request(option,(err,response,body)=>{
            return res.send(body)
        })
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})