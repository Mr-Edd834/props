import React from 'react';
import Player from './player.js';
import players from './players.js';
import './Player.css'; // Assuming you have some styles for Player component
import { Row } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Row className="justify-content-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </Row>
  );
};

export default PlayersList;