import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Video from './Video';
import axios from 'axios';

class App extends Component {
  state = {
    videos: []
  };

  onSearchSubmit = async search => {
    console.log(search);
    const response = await axios.get('/api', {
      params: {
        search: search
      }
    });

    this.setState({ videos: response.data.items });
  }

  render() {
    return(
      <div className="ui container main">
      <SearchBar onSubmit={this.onSearchSubmit} />
      <VideoList videos={this.state.videos}/>
      <Video />
    </div>
    );
  }
}

export default App;