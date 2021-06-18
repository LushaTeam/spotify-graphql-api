const { errorHandler } = require('../utils');

module.exports = {
  Query: {
    album: async (parent, { id }, { authorization, spotifyAPI }, info) => {
      try {
        const response = await spotifyAPI.get(`/albums/${id}`, {
          headers: { authorization },
        });

        return response.data;
      } catch (e) {
        return errorHandler(e);
      }
    },
  },

  Album: {
    artists: async (parent, args, { authorization, spotifyAPI }) => {
      // how do we resolve this?
    },
  },
};
