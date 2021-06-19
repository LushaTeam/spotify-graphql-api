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

    albums: (parent, args, { authorization, spotifyAPI }) =>
      spotifyAPI.getAlbumsByArtistId(parent.id, authorization),
  },
};
