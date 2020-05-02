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

  const videoIdList = searchResponse.data.items.map(video => {
    return video.id.videoId;
  });

  let videoResponse;
  try {
    videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,contentDetails',
        key: key,
        id: videoIdList.toString(),
        maxResults: 5
      }
    });
  } catch (error) {
    console.log("Video search error: " + error);
    const err = new Error("Video search failed");
    err.status = error.response.status;
    throw err;
  }

  return videoResponse.data;
};