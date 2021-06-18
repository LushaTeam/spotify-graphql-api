const snakeCase = require('lodash.snakecase');
const { getArtist } = require('./utils');

const { errorHandler } = require('../utils');

module.exports = {
  Query: {
    artist: async (parent, { id }, { authorization, spotifyAPI }, info) =>
      getArtist(id, authorization),
  },

  Artist: {
    followers: (parent) => parent.followers.total,
    genres: (parent) => {
      return parent.genres.map((genre) => snakeCase(genre).toUpperCase());
    },
    albums: async (parent, args, { authorization, spotifyAPI }) => {
      // how do we resolve this?
    },
  },
};
