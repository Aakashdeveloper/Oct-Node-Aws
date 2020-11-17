const graphql = require('graphql');
const axios = require('axios');

const{
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const ProductType = new GraphQLObjectType({
    name:'Product',
    fields:{
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        language:{type:GraphQLString},
        rate:{type:GraphQLFloat},
        type:{type:GraphQLString},
        imageUrl:{type:GraphQLString}
    }
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        product:{
            type:ProductType,
            args:{id:{type:GraphQLInt}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:7700/products/${args.id}`)
                .then((res) => res.data)
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addProducts:{
            type:ProductType,
            args:{
                id: {type:GraphQLInt},
                name: {type:GraphQLString},
                language:{type:GraphQLString},
                rate:{type:GraphQLFloat},
                type:{type:GraphQLString},
                imageUrl:{type:GraphQLString}
            },
            resolve(parentValue,{id,name,language,rate,type,imageUrl}){
                return axios.post(`http://localhost:7700/products`,{id,name,language,rate,type,imageUrl})
                .then((res) => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:mutation
})