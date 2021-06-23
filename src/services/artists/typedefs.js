const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    artist(id: ID!): Artist
  }

  type Artist {
    id: ID!
    followers: Int!
    name: String!
    popularity: Int!
    genres: [Genre!]!
    albums: [Album!]
  }
`;
