

import React from 'react';
import Player from './player.js';
import players from '../data/players.js';
import { Container, Row, Col } from 'react-bootstrap';

const PlayerList = () => {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerList;
