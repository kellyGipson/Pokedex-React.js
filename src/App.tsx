import React, { useState } from 'react';

import './styles/App/App.css';

import Device from './components/Device';
import BottomScreen from './components/BottomScreen';
import TopScreen from './components/TopScreen'

function App() {
  const [poweredOn, setPoweredOn] = useState(false);

  const UsePowerOn = () => {
    //when bottom screen is clicked, turn on the screens
  }

  return (
    <div className="App">
      <Device />
      <div className='screenContainer'>
        <TopScreen />
        <BottomScreen />
      </div>
    </div>
  );
}

export default App;
