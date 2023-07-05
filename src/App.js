import './App.css';
import HexConverter from './components/Converter';
import { useState } from 'react';

function App() {
  const [ bgcolor, setBgcolor ] = useState('#ffffff')
  const updateBackgroundColor = (color) => setBgcolor(color);
  return (
    <div
      className="App"
      style={{backgroundColor: `${bgcolor}`}}>
      <HexConverter applyColor={ updateBackgroundColor } />
    </div>
  );
}

export default App;