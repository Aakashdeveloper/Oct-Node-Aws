const express = require('express');
const app = express();
const port = process.env.PORT || 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name = "users";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.status(200).send('Helth Ok')
});

//post user
app.post('/addUser',(req,res) => {
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send('User Added');
    });
});

//Get User
app.get('/users',(req,res) => {
    var query = {}
    if(req.query.id){
        query={_id:Number(req.query.id),IsActive:true}
    }else if(req.query.city){
        query={city:req.query.city,IsActive:true}
    }else{
        query={IsActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    });
});


MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db=client.db('Sjtech');
    app.listen(port,(err)=>{
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})