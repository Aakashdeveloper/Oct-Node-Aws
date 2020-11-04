var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


function router(menu){
  hotelRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url,function(err,connection){
          if(err){
            res.status(501).send('Error while connecting')
          }else{
            const dbo = connection.db('Sjtech')
            dbo.collection('hotels').find({}).toArray(function(err,data){
              if(err){
                res.status(501).send('Error while fetching')
              }else{
                res.send(data)
                //res.render('hotel',{title:'Hotels Page',data:data,menu})
              }
            })
          }
        })
       
  })

  hotelRouter.route('/details')
    .get(function(req,res){
        res.send('Hotel Details')
  })

  return hotelRouter
}

module.exports = router;