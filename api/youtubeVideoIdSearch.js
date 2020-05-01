var axios = require('axios');

module.exports = async (key, search) => {
  let searchResponse;
  try {
    searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: key,
        q: search,
        type: 'video',
        maxResults: 5,
        fields: 'items(id)'
      }
    });
  } catch (error) {
    console.log("Search error: " + error);
    const err = new Error("Search failed");
    err.status = error.response.status;
    throw err;
  }

  return searchResponse;
};