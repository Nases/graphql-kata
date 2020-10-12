const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var root = {
  hello: () => {
    return 'Hello World!'
  }
}


const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))



const PORT = 3000
app.listen(PORT, console.log(`Listening on port: ${PORT}`))