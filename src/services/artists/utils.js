const { errorHandler } = require('../utils');
const spotifyAPI = require('../../api/spotify-api');

const getArtist = async (id, authorization) => {
  try {
    const response = await spotifyAPI.get(`/artists/${id}`, {
      headers: { authorization },
    });

    return response.data;
  } catch (e) {
    return errorHandler(e);
  }
};

module.exports = {
  getArtist,
};
