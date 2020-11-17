const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const port = 8600
const app = express();
const cors = require('cors');
const schema = require('./Schema/schema');

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql:true
    })
)

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})