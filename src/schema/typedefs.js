const { gql } = require('apollo-server-express');

const root = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

module.exports = [root];
