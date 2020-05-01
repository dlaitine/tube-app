var axios = require('axios');

module.exports = async (key, videoIds) => {
  let videoResponse;
  try {
    videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,contentDetails',
        key: key,
        id: videoIds.toString(),
        maxResults: 5
      }
    });
  } catch (error) {
    console.log("Video error: " + error);
    const err = new Error("Video search failed");
    err.status = error.response.status;
    throw err;
  }

  return videoResponse;
};