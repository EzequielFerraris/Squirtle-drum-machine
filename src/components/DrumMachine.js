import React, { useEffect, useState } from "react";
import '../stylesheets/DrumMachine.css';
import {sounds1, sounds2 } from './sounds.js';

function DrumMachine() {

    const [soundsState, setSounds] = useState(sounds1);

    const changeSounds = () => {
        if(sounds1 == soundsState) {
            setSounds(sounds2);
        }
        else {
            setSounds(sounds1);
        }
    }

    const soundPlay = (key) => {
        const audio = document.getElementById(key);
        audio.currentTime = 0;
        audio.play();
    }

    const handleKeyDown = (event) => {
        let pressedSound = soundsState.filter((sound) => sound.keyCode === event.keyCode);
        if(pressedSound.length > 0) {
            soundPlay(pressedSound[0].key);
        };
    };

    useEffect(() => document.addEventListener("keydown", handleKeyDown));

    const soundButtons = soundsState.map(({ key, id, keyCode, url }) => {
        return <button  
        id={id} 
        key={keyCode} 
        onClick={() => soundPlay(key)}>
            <audio 
            src={url} 
            id={key}/>
            {key}
        </button>
    })

    return <div className="main-container">
            <div className="buttons-container">
            {soundButtons}
            </div>
            <div className="controlers-container">
                <button id="toggle" onClick={() => changeSounds()}>
                    Change sounds
                </button>
            </div>
        </div>
    
};

export default DrumMachine;