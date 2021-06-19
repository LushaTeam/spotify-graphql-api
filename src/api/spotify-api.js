const axios = require('axios');

const errorHandler = require('../error-handler');

const spotifyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

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

const getAlbum = async (id, authorization) => {
  try {
    const response = await spotifyAPI.get(`/albums/${id}`, {
      headers: { authorization },
    });

    return response.data;
  } catch (e) {
    return errorHandler(e);
  }
};

module.exports = {
  getArtist,
  getAlbum,
};
