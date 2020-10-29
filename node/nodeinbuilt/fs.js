var fs = require('fs');

//overwrite the file
/*fs.writeFile('mytest.txt','This is from Developer Funnel',function(err){
    if(err) throw err;
    console.log("writeFile Task done")
})*/

//add in same file
/*fs.appendFile('mytest.txt','This is from SJ Funnel \n',function(err){
    if(err) throw err;
    console.log("writeFile Task done")
})
*/

//read the file
/*fs.readFile('mytest.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
})
*/
//Delete the file
/*
fs.unlink('mytest.txt',function(){
    if(err) throw err;
    console.log("File Deleted")
})
*/


//Rename the file
fs.rename('mytest.txt','mytext.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
})


