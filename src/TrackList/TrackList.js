import React, { Component } from 'react';
import './TrackList.css'

export default class TrackList extends Component {
    render() {
        const { searchResults } = this.props;
        return (
            <div class="TrackList">
                {searchResults.map(track => {
                    return (
                        <div key={track.id}>
                            <h3>{track.name}</h3>
                            <p>{track.artist} | {track.album}</p>
                        </div>)
                })}
            </div>
        )
    }
}


