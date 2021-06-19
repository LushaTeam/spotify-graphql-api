const snakeCase = require('lodash.snakecase');

module.exports = {
  Query: {
    artist: (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getArtist(id, authorization),
  },

  Artist: {
    followers: (parent) => parent.followers.total,
    genres: (parent) =>
      parent.genres.map((genre) => snakeCase(genre).toUpperCase()),
    albums: async (parent, args, { authorization }) => {
      // How do we resolve this?
    },
  },
};
