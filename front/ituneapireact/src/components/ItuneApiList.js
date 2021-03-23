import React from 'react';
import PropTypes from 'prop-types';

import './ItuneApiList.css';

const ItuneApiList = ({songs, selectSong}) => {
    if(songs.length>0 && songs[0]!==''){
        return(
            <div className="ItuneApiList">
                <h4>results : {songs.length}</h4>
                <ul>
                    {(songs || []).map((song, index) => {
                        return <li key={index} onClick={() => selectSong(song)} data-preview={song.previewUrl}><h1>{song.artistName}</h1><span>{song.trackName}</span></li>;
                    })}
                </ul>
            </div>
        )
    }else{
        return <h4>nothing to show</h4>;
    }
}

ItuneApiList.propTypes = {
	songs: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectSong: PropTypes.func.isRequired,
};

export default ItuneApiList;