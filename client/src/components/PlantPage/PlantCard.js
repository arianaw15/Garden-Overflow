import React from "react";
import { Card, Button } from 'react-bootstrap';



function PlantCard(props) {
function addToGarden() {
  console.log("Button working");
  fetch(`/api/addtogarden/`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ props })
  })
    .then(data => data.json())
 }

    return (
        <Card className= "plant-card h-100" style={{ width: 'auto' }}>
        <Card.Img className="h-75"style={{height: 'auto'}} variant="top" src={props.image_url} />
        <Button className="plant-button h-25" type="submit">Add {props.name} to Your Garden</Button>
        
      </Card>
    );
  };

export default PlantCard;
