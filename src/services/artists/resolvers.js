const snakeCase = require('lodash.snakecase');

module.exports = {
  Query: {
    artist: async (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getArtist(id, authorization),
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
