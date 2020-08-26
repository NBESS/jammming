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
        }
      ],
      playlistName: 'First Test Playlist',
      playlistTracks: [
        {
          id: 11,
          name: 'Playlist Test name 1',
          artist: 'Playlist Test artist 1',
          album: 'Playlist Test album 1'
        },
        {
          id: 22,
          name: 'Playlist Test name 2',
          artist: 'Playlist Test artist 2',
          album: 'Playlist Test album 2'
        },
        {
          id: 33,
          name: 'Playlist Test name 3',
          artist: 'Playlist Test artist 3',
          album: 'Playlist Test album 3'
        }
      ],
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack =>
      savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track,] })
  }

  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: newPlaylist });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div >
    )
  }
}

export default App;
