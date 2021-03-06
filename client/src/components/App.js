import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Error from './Error';
import Video from './Video';
import VideoList from './VideoList';
import axios from 'axios';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: '',
    errorMessage: ''
  };

  onSearchSubmit = async (search) => {
    this.setState({ errorMessage: '' });

    if(search === '') {
      this.setState({ errorMessage: 'Please enter a search term' });
      return;
    }

    try {
      const response = await axios.get('/api', {
        params: {
          search: search
        }
      });
      this.setState({ videos: response.data.items });
      this.setState({ selectedVideo: response.data.items[0] });
    } catch (error) {
      if(error.response) {
        if (error.response.status === 403) {
          this.setState({ errorMessage: 'The daily YouTube API quota limit is exceeded, sorry!' });
        } else {
          this.setState({ errorMessage: 'An error occured' });
        }
      } else {
        this.setState({ errorMessage: 'An error occured' });
      }
    }
  }

  onVideoSelect = video => {
    window.scrollTo(0, 0);
    this.setState({ selectedVideo: video });
  }

  render() {
    return(
      <div className="ui container main">
      <SearchBar onSubmit={this.onSearchSubmit} />
      <Error errorMessage={this.state.errorMessage} />
      <Video video={this.state.selectedVideo}  />
      <VideoList videos={this.state.videos} onClick={this.onVideoSelect}/>
    </div>
    );
  }
}

export default App;