import './App.css';
import React, { useState } from 'react';
import DrumMachine from './components/DrumMachine.js';
import squirtle from './images/squirtle.png';

function App() {

  return (
    <div className="App">
      <div>
      <img
      id = "squirtle1"
      alt= "squirtle1"
      src={squirtle} />
      <img
      id = "squirtle2"
      alt= "squirtle2"
      src={squirtle} />
      </div>    
      <DrumMachine />  
    </div>
  );
}

export default App;
