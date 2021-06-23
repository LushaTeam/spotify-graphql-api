const { gql } = require('apollo-server-express');

const root = gql`
  type Query {
    _: String
  }
`;

module.exports = [root];
