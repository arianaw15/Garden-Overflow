import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';



function PlantCard() {
  const [plantTable, setPlantTable] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setPlantTable(data.results));
  }, []);
  console.log(plantTable);
  return plantTable.map((plant) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={plant.picture.large} />
        <Button type="submit">Add This Plant to Your Profile</Button>
        <Card.Body>
         
        </Card.Body>
      </Card>
    );
  });
}

export default PlantCard;
