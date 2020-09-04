import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../util/Spotify';

// let storedPlaylistName = localStorage.getItem('playlistName');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack =>
      savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track,] })
    let playlistJSON = localStorage.getItem('playlist');
    let playlist = JSON.parse(playlistJSON);


    if (playlist == null) {
      playlist = [];
    }
    playlist = this.state.playlistTracks;
    playlistJSON = JSON.stringify(playlist)
    localStorage.setItem('playlist', playlistJSON)


  }

  removeTrack(track) {
    let filteredPlaylist = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    let playlistJSON = localStorage.getItem('playlist')
    let playlist = JSON.parse(playlistJSON);

    let playlistToStore = playlist.filter(currentTrack => currentTrack.id !== track.id);
    playlistJSON = JSON.stringify(playlistToStore)
    localStorage.setItem('playlist', playlistJSON)
    this.setState({ playlistTracks: filteredPlaylist })
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
    localStorage.setItem('playlistName', name)
  }

  savePlaylist() {

    let trackURIs = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    })
    localStorage.clear()
  }

  search(term) {
    Spotify.search(term)
      .then(searchResults => this.setState({ searchResults: searchResults }))
  }


  componentDidMount() {
    let playlistJSON = localStorage.getItem('playlist');
    let playlist = JSON.parse(playlistJSON);
    let playlistName = localStorage.getItem('playlistName');

    if (playlist.length) {
      this.setState({ playlistTracks: playlist })

    }
    if (playlistName && playlist.length) {
      this.setState({ playlistName: playlistName })

    } else {
      this.setState({ playlistName: 'New Playlist' })
    }


  }


  render() {


    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div >
    )
  }
}

export default App;
