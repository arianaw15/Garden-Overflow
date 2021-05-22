import React from 'react'
import PlantCard from './PlantCard'
import { Container, Row, Col } from 'react-bootstrap';

function PlantColumn() {
    return (
      <Container>
      <Row>
        <Col sm><PlantCard /></Col>
        <Col sm><PlantCard /></Col>
        <Col sm><PlantCard /></Col>
      </Row>
    </Container>
    )
}

export default PlantColumn
