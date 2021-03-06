import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbname = "Sjtech";

const MainCall = {};
var output;

MainCall.getData=(colName)=>{
    MongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        var dbo = connection.db(dbname);
        dbo.collection(colName).find({}).toArray((err,result) => {
            if(err) throw err;
            console.log('Data Fetched');
            output = result;
            db.close();
        })
    })

    return output;
}

MainCall.postData=(colName,dbObj)=>{
    MongoClient.connect(url,(err,connection) => {
        if(err) throw err;
        var dbo = connection.db(dbname);
        dbo.collection(colName).insertOne(dbObj,(err,result) => {
            if(err) throw err;
            console.log('Data Added');
            db.close()
        })
    })
    let out = `Data inserted in ${colName}`;
    return out;

}

export default MainCall;