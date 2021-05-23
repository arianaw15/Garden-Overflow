import React, {useEffect, useState} from 'react';
import './index.css'
// import PlantColumn from './PlantColumn';
import PlantCard from './PlantCard'
import { Row, Col, Container } from 'react-bootstrap';
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import ScrollToTop from '../ScrollToTop/scrollToTop';


function PlantPage({zone}) {
    const [plantTable, setPlantTable] = useState([]);
  useEffect(() => {
    fetch(`/api/plants/${zone || "4"}`)
      .then((res) => {
        
        return res.json()})
      .then((data) => {
        console.log(data);
        setPlantTable(data)});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
      <div>
        <LoggedHeader />
        <Container>
            <Row className="plantcard" md={3}>
        {plantTable.length ? (plantTable.map(each => <Col className="plant" key={each.id} ><PlantCard {...each} /></Col>)) : (<h3>No Posts in this zone currently!</h3>)}
        </Row>
        </Container>
        <ScrollToTop />
      </div>
    )
}

export default PlantPage
