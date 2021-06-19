module.exports = {
  Query: {
    album: (parent, { id }, { authorization, spotifyAPI }, info) =>
      spotifyAPI.getAlbum(id, authorization),
  },

  Album: {
    artists: (parent, args, { authorization, spotifyAPI }) => {
      // N + 1 solved using the API correctly
      const { artists } = parent;

      const ids = artists
        .slice(1)
        .reduce(
          (currentIds, artist) => `${currentIds},${artist.id}`,
          artists[0].id,
        );

      return spotifyAPI.getArtists(ids, authorization);
    },
  },
};
