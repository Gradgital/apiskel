var { buildSchema } = require('graphql');


var Schema = buildSchema(`
  type Query {
    hello(name: String): String
    setHello: Int
    getHello: String
  }
`);


module.exports = Schema;