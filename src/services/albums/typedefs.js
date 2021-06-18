const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    album(id: ID!): Album
  }

  type Album {
    id: ID!
    name: String!
    label: String
    genres: [Genre!]
    popularity: Int
    release_date: Date!
    total_tracks: Int!
    artists: [Artist!]!
  }
`;
