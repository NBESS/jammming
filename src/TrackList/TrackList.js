import React, { Component } from 'react';
import './TrackList.css'
import Track from '../Track/Track';

export default class TrackList extends Component {

    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => (
                    <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
                )
                )}
            </div>
        )
    }
}


