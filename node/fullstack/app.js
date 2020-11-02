var express = require('express');
var app = express();
var port = 7600;
var cityRouter = require('./src/routes/CityRouter');
var hotelRouter = require('./src/routes/HotelRouter');

//static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("<h1>Welcome with Express</h1>")
    res.render('index',{title:'Home Page'});
});

app.use('/city',cityRouter);
app.use('/hotel',hotelRouter);

app.listen(port,function(err){
    if(err) throw err
    console.log(`Server is running on port ${port}`)
});