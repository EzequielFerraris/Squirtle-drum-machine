import React, { useEffect, useState } from "react";
import '../stylesheets/DrumMachine.css';
import { sounds1, sounds2 } from './sounds.js';
import VolumeControl from "./VolumeControl";

function DrumMachine() {

    const [soundsState, setSounds] = useState(sounds1);
    const [featuring, setFeaturing] = useState("Be loud, be proud")
    const [volume, setVolume] = useState(1);

    const changeSounds = () => {
        if(sounds1 === soundsState) {
            setSounds(sounds2);
            setFeaturing("Keyboard set nº2");
        }
        else {
            setSounds(sounds1);
            setFeaturing("Keyboard set nº1");
        }
    }

    const soundPlay = (key, id) => {
        const audio = document.getElementById(key);
        setFeaturing(id);
        audio.currentTime = 0;
        audio.play();
    }

    const handleKeyDown = (event) => {
        const pressedSound = soundsState.filter((sound) => sound.keyCode === event.keyCode);
        if(pressedSound.length > 0) {
            soundPlay(pressedSound[0].key);
        };
    };

    const handleVolume = (event) => {
        setVolume(event.target.value);
    };

    useEffect(() => document.addEventListener("keydown", handleKeyDown));

    const soundButtons = soundsState.map(({ key, id, keyCode, url }) => {
        return <button 
        className="drum-pad" 
        id={id} 
        key={keyCode} 
        onClick={() => soundPlay(key, id)}>
            <audio 
            className="clip"
            src={url}
            id={key}/>
            {key}
        </button>
    });

    const setKeyVolume = () => {
        const audios = soundsState.map(sound => document.getElementById(sound.key))
        audios.forEach(audio => {
            if(audio) {
                audio.volume = volume;
            }
        }
        )
    };

    return <div className="main-container">
            {setKeyVolume()}
            <div className="buttons-container">
            {soundButtons}
            </div>
            <div className="controlers-container">
                <div id="display">
                    {featuring}
                </div>
                <VolumeControl 
                volume={volume}
                handleVolume={handleVolume}
                />
                 <button id="toggle" onClick={() => changeSounds()}>
                    Change sounds
                </button>
            </div>
        </div>
    
};

export default DrumMachine;