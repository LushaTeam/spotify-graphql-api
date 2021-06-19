module.exports = {
  Query: {
    album: (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getAlbum(id, authorization),
  },

  Album: {
    artists: (parent, args, { authorization }) => {
      // how do we resolve this?
    },
  },
};
