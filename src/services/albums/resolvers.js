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
      const { artists } = parent;

      const ids = artists
        .slice(1)
        .reduce(
          (currentIds, artist) => `${currentIds},${artist.id}`,
          artists[0].id,
        );

      const response = await spotifyAPI.get(`/artists?ids=${ids}`, {
        headers: { authorization },
      });

      return response.data.artists;
    },
  },
};
