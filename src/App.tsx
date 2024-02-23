import React from 'react';
import logo from './logo.svg';
import './App.css';
import { callCount } from './firebase';

function App() {
  return (
    <div className="App">
      <button onClick={callCount}>Click me</button>
    </div>
  );
}

export default App;
