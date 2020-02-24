
const app = require('./app');

port = process.env.PORT || 3000;

app.listen(port);
console.log('Running a GraphQL API server at localhost:4000/graphql');