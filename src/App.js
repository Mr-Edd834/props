import logo from './logo.svg';
import './App.css';
import PlayersList from './components/PlayersList';
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
