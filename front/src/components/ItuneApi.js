import React, { useState } from 'react';
import './ItuneApi.css';
import black from './black.jpg';

import ItuneApiList from './ItuneApiList';
import ItuneApiPlayer from './ItuneApiPlayer';

const ItuneApi = () => {

    const [mySongs, setMySong] = useState(['']); // le state pour la liste de songs
    const [inputValue, setInputValue] = useState('');
    const [trackLink, setTrackValue] = useState('');

    // event handler pour l'input pour récupérer le texte saisi
	const handleChangeInput = (e) => {
		// lors de l'evenement onChange on change le state inputValue (controlled component)
		setInputValue(e.target.value);
        setTrackValue('');
        console.log('');
	};

    const fetchItunesSongs = async (term) => {
        try {
            const url = `http://localhost:4000/search/${term}`;
            const response = await fetch(url);
            const responseJson = await response.json();
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    };
    // event handler pour le click sur le bouton
    const handleClickNewSearch = async () => {
        setMySong((previoussongs) => {
            // pour reset ma liste de songs
            return [''];
        });
        setTrackValue('');
        let Tmp = inputValue;
        if (Tmp!==''){
            let searchValue = Tmp.replace('', '+');
            const data = await fetchItunesSongs(searchValue);
            if(data.length>0){
                setMySong([data[0]]);
                for(let i = 1; i < data.length; i++){
                    // on modifie la liste de songs qui est dans le state avec setSongs

                    setMySong((previoussongs) => {
                        // la nouvelle valeur de a liste = ancienne valeur + la valeur saisie
                        return [...previoussongs, data[i]];
                    });
                }
            }
        }
    };

    const handleClickSelectSong = (songToListen) => { // hoobyToRemove est le hobby à supprimer
        setTrackValue(songToListen);
	};

    return(
        <div className="ItuneApi">
            <div className="search-container">
                <h2>Itune Api en React</h2>
                <input
                    type="text"
                    placeholder="Artiste, Album, Musique .."
                    onChange={handleChangeInput}
                    value={inputValue}
                />
                <button onClick={handleClickNewSearch} type="button" class="btn">
                    Rechercher
                </button>
            </div>
            <ItuneApiList songs={mySongs} selectSong = {handleClickSelectSong}/>
            <ItuneApiPlayer track ={trackLink}></ItuneApiPlayer>
        </div>
    )
}

export default ItuneApi;