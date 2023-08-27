import React, {useEffect, useState} from 'react';
import './index.css'
// import PlantColumn from './PlantColumn';
import PlantCard from './PlantCard'
import { Row, Col, Container } from 'react-bootstrap';
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import ScrollToTop from '../ScrollToTop/scrollToTop';
import { Auth } from "aws-amplify";



function PlantPage() {
  let [zone, setZone] = useState("7");
  const [plantTable, setPlantTable] = useState([]);
  let [cognitoUser, setCognitoUser] = useState({});

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log(user);
        setCognitoUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `/api/getuser/${
        !cognitoUser.attributes
          ? "Stand By..."
          : cognitoUser.attributes.nickname
      }`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setZone(res.zone);
      })
      .catch((err) => console.error());
  }, [cognitoUser]);

  useEffect(() => {
    fetch(`/api/plants/${zone || "4"}`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => {
        
        return res.json()})
      .then((data) => {
        console.log(data);
        setPlantTable(data)});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zone]);
    return (
      <div>
        <LoggedHeader />
        <Container>
          <h2 className="hardinessZonePlants">Plants for hardiness zone: {zone}</h2>
            <Row className="plantcard" md={3}>
        {plantTable.length ? (plantTable.map(each => <Col className="plant" key={each.id} ><PlantCard {...each} /></Col>)) : (<h3 style={{color: "white", textAlign: "center"}}>No Posts in this zone currently!</h3>)}
        </Row>
        </Container>
        <ScrollToTop />
      </div>
    )
}

export default PlantPage
