import React from 'react';
import './App.css';
import { useLocalStorage } from './useLocalStorage'

function App() {
  const [state, setState ]= useLocalStorage('test', 1000)
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => setState(prev => prev! + 10)}>+</button>
      <button onClick={() => setState(prev => prev! - 10)}>-</button>
    </div>
  );
}

export default App;
