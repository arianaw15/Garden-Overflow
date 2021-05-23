import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';



function PlantCard(props) {
    return (
        <Card className= "plant-card" style={{ width: 'auto' }}>
        <Card.Img style={{height: 'auto'}} variant="top" src={props.image_url} />
        <Button className="plant-button" type="submit">Add {props.name} to Your Garden</Button>
        
      </Card>
    );
  };

export default PlantCard;
