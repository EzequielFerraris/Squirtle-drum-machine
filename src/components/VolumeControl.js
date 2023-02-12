import React from "react";
import '../stylesheets/VolumeControl.css';

function VolumeControl({ volume, handleVolume }) {
    return <div>
    <input
    id="volume-control"
    min="0"
    max="1"
    step="0.01"
    type="range"
    value={volume}
    onChange={handleVolume}>
    </input>
    <h3>Volume: %{Math.round(volume * 100)}</h3>
    </div>
}

export default VolumeControl;