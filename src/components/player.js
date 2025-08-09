
import React from 'react';
import { Card } from 'react-bootstrap';
import './Player.css';
import PropTypes from 'prop-types';

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.2)'
};

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/150"
}) => {
  return (
    // <Card style={cardStyle}>
    //   <Card.Img variant="top" src={imageUrl} alt={`${name}`} />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Text>
    //       <strong>Team:</strong> {team}<br />
    //       <strong>Nationality:</strong> {nationality}<br />
    //       <strong>Jersey Number:</strong> {jerseyNumber}<br />
    //       <strong>Age:</strong> {age}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    <Card className="player-card" style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
