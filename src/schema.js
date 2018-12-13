const { gql } = require('apollo-server');

const schema = gql `
  type Query {
    allProjects: [Project!]!
    project(id: ID!): Project
  }

  type Mutation {
    createProject(name: String!,location: String!): Project!
  }

  type Project{
    id: ID!
    name: String!
    location: String!
  }
`

module.exports = schema
