const express = require('express');
const app = express();
const port = 3400;

app.use(cors());

const Pool = require('pg').Pool;
const connPool = new Pool({
    user:'postgres',
    host:'localhost',
    port:'5432',
    database:'postgres',
    password:''
});

app.get('/user',(req,res) => {
    connPool.query('SELECT * from Emp',(err,data) => {
        if(err) throw err;
        else{
            res.status(200).send(data.rows)
        }
    })
})

app.post('/adduser',(req,res) =>{
    let name="john";
    let rollno=1;
    connPool.query('INSERT INTO "Emp"(name,rollno) VALUES ($1,$2);',[name,rollno],(err,result) => {
        if(err) throw err;
        else{
            res.status(200).send('data added')
        }
    })
})


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})