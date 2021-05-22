import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';



function PlantCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{height: '15rem'}} variant="top" src={props.image_url} />
        <Button type="submit">Add This Plant to Your Profile</Button>
        <Card.Body>
         
        </Card.Body>
      </Card>
    );
  };

export default PlantCard;
