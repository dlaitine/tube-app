import React, { Component } from 'react';

class SearchBar extends Component {
  state = { search: '' };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.search);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Video Search</label>
            <input
              type="text"
              placeHolder="Search videos..."
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })} />
          </div>
        </form>
      </div>
    );
  } 
}

export default SearchBar;