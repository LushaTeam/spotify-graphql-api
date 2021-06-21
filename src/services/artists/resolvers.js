const { ApolloError } = require('apollo-server-express');

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

    albums: (parent, args, { authorization, spotifyAPI }) => {
      throw new ApolloError('In the end, the albums didnt matter');
    },
  },
};
