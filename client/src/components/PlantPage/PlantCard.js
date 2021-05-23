import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';



function PlantCard(props) {
    return (
        <Card className= "plant-card h-100" style={{ width: 'auto' }}>
        <Card.Img className="h-75"style={{height: 'auto'}} variant="top" src={props.image_url} />
        <Button className="plant-button h-25" type="submit">Add {props.name} to Your Garden</Button>
        
      </Card>
    );
  };

export default PlantCard;
