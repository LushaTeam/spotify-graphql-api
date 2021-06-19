module.exports = {
  Query: {
    album: async (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getAlbum(id, authorization),
  },

  Album: {
    artists: async (parent, args, { authorization }) => {
      // how do we resolve this?
    },
  },
};
