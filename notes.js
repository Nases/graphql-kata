// We need 2 things to handle GraphQL queries
// 1st a schema that defines Query types
// 2nd a function called resolver(as API root) for each API endpoint

// example schema
var { buildSchema } = require('graphql')
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// example resolver function (API root)
var root = { hello: () => 'Hello World!' }
