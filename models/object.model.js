var { buildSchema } = require('graphql');


var Schema = buildSchema(`
  type Query {
    setObject(object: String,objectName: String): String
    getObject(objectFields: [String],objectName: String): String
  }
`);


module.exports = Schema;