module.exports = {
  Query: {
    album: async (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getAlbum(id, authorization),
  },

  Album: {
    artists: async (parent, args, { authorization, spotifyAPI }) => {
      // We moved n+1 problem from client to server
      const { artists } = parent;

      return Promise.all(
        artists.map((artist) => spotifyAPI.getArtist(artist.id, authorization)),
      );
    },
  },
};
