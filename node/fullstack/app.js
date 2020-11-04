var express = require('express');
var app = express();
var port = 7600;

var menu = [
    {link:'/',name:'Home'},
    {link:'/hotel',name:'Hotel'},
    {link:'/city',name:'City'}
]

var cityRouter = require('./src/routes/CityRouter')(menu);
var hotelRouter = require('./src/routes/HotelRouter')(menu);


//static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("<h1>Welcome with Express</h1>")
    res.render('index',{title:'Home Page',menu:menu});
});

app.use('/city',cityRouter);
app.use('/hotel',hotelRouter);

app.listen(port,function(err){
    if(err) throw err
    console.log(`Server is running on port ${port}`)
});