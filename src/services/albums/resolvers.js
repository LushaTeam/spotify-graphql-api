const { getArtist } = require('../artists/utils');
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
      // We moved n+1 problem from client to server
      const { artists } = parent;

      return Promise.all(
        artists.map((artist) => getArtist(artist.id, authorization)),
      );
    },
  },
};
