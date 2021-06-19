const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    artist(id: ID!): Artist
  }

  type Artist {
    id: ID!
    name: String!
    followers: Int!
    popularity: Int!
    genres: [Genre!]!
    albums: [Album!]!
  }
`;
