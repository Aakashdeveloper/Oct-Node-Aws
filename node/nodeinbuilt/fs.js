var fs = require('fs');

/*fs.writeFile('mytest.txt','This is from Developer Funnel',function(err){
    if(err) throw err;
    console.log("writeFile Task done")
})


fs.appendFile('mytest.txt','This is from SJ Funnel \n',function(err){
    if(err) throw err;
    console.log("writeFile Task done")
})
*/

fs.readFile('mytest.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
})
