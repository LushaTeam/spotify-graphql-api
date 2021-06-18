const snakeCase = require('lodash.snakecase');

const { errorHandler } = require('../utils');

module.exports = {
  Query: {
    artist: async (parent, { id }, { authorization, spotifyAPI }, info) => {
      try {
        const response = await spotifyAPI.get(`/artists/${id}`, {
          headers: { authorization },
        });

        return response.data;
      } catch (e) {
        return errorHandler(e);
      }
    },
  },

  Artist: {
    followers: (parent) => parent.followers.total,
    genres: (parent) => {
      return parent.genres.map((genre) => snakeCase(genre).toUpperCase());
    },
    albums: async (parent, args, { authorization, spotifyAPI }) => {
      const response = await spotifyAPI.get(`/artists/${parent.id}/albums`, {
        headers: { authorization },
      });

      return response.data.items;
    },
  },
};
