import React from 'react';
import PropTypes from 'prop-types';
import black from './black.jpg';
import './ItuneApiPlayer.css';

const ItuneApiplayer = ({track}) => {
    console.log(track);
    if(track!==''){
    return <div className="ItuneApiPlayer">
                <img src={track.artworkUrl100}></img>
                <div className="info">
                    <div className="text">
                        <h3>{track.trackName}</h3>
                        <h4>{track.artistName}</h4>
                    </div>
                </div>
                <audio class="player" controls src={track.previewUrl}>
                    <code></code>
                </audio>
            </div>
    }
    return'';
};

ItuneApiplayer.propTypes = {
	track: PropTypes.string.isRequired,
};

export default ItuneApiplayer;