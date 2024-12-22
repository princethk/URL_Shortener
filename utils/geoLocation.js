const axios = require('axios');

const getGeoLocation = async (ip) => {
  try {
    const response = await axios.get(`https://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return null;
  }
};

module.exports = { getGeoLocation };