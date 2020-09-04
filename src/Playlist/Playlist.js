import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }


  handleNameChange(e) {
    this.props.onNameChange(e.target.value)
  }


  componentDidUpdate(prevProps, prevState) {
    if (Number(this.props.playlistTracks.length) !== Number(prevProps.playlistTracks.length)) {
      // console.log(this.props.playlistTracks)
    }
  }


  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}