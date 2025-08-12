import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 className="my-4">Football Stars</h1>
      <PlayersList />
    </div>
  );
}

export default App;
