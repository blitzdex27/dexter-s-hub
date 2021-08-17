const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    email: String
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
