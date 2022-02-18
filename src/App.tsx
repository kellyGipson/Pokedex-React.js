import React from 'react';

import './styles/App.css';

import Device from './components/Device';

function App() {
  return (
    <div className="App">
      <Device />
      <div>{`${window.screen.height} by ${window.screen.width}`}</div>
    </div>
  );
}

export default App;
