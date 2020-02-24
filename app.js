var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const path = require('path')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const helloSchema = require('./models/test.model');
const objectSchema = require('./models/object.model');
const objectRoot = require('./controller/object.controller');
const helloRoot = require('./controller/test.controller');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);


// The root provides a resolver function for each API endpoint
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};


app.use('api/hello', graphqlHTTP({
  schema: helloSchema,
  rootValue: helloRoot,
  graphiql: true,
}));

app.use('api/object', graphqlHTTP({
  schema: objectSchema,
  rootValue: objectRoot,
  graphiql: true,
}));

app.use('api/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")));



module.exports = app;

