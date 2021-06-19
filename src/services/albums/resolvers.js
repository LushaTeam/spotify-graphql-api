const { getAlbum } = require('../../api/spotify-api');

module.exports = {
  Query: {
    album: async (parent, { id }, { authorization }, info) =>
      getAlbum(id, authorization),
  },

  Album: {
    artists: async (parent, args, { authorization }) => {
      // how do we resolve this?
    },
  },
};
