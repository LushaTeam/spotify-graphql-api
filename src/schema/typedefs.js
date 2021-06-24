const { gql } = require('apollo-server-express');

const artistsTypedefs = require('../services/artists/typedefs');
const albumsTypedefs = require('../services/albums/typedefs');

const root = gql`
  type Query {
    _: String
  }

  enum Genre {
    ALTERNATIVE_METAL
    NU_METAL
    POST_GRUNGE
    RAP_METAL
    INDIE
    POP
    PUNK
  }
`;

module.exports = [root, artistsTypedefs, albumsTypedefs];
