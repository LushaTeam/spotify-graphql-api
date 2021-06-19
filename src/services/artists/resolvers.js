const snakeCase = require('lodash.snakecase');

const { getArtist } = require('../../api/spotify-api');

module.exports = {
  Query: {
    artist: async (parent, { id }, { authorization }, info) =>
      getArtist(id, authorization),
  },

  Artist: {
    followers: (parent) => parent.followers.total,
    genres: (parent) => {
      return parent.genres.map((genre) => snakeCase(genre).toUpperCase());
    },
    albums: async (parent, args, { authorization }) => {
      // How do we resolve this?
    },
  },
};
