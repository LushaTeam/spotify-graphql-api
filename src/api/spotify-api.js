const axios = require('axios');

const spotifyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

module.exports = spotifyAPI;
