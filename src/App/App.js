import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Test name 1',
          artist: 'Test artist 1',
          album: 'Test album 1'
        },
        {
          id: 2,
          name: 'Test name 2',
          artist: 'Test artist 2',
          album: 'Test album 2'
        },
        {
          id: 3,
          name: 'Test name 3',
          artist: 'Test artist 3',
          album: 'Test album 3'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
