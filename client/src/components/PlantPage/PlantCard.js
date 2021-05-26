import {React, useEffect, useState} from "react";
import { Card, Button } from 'react-bootstrap';
import { Auth } from "aws-amplify";


function PlantCard(props) {
  let [cognitoUser, setCognitoUser] = useState({});
  let [userid, setUserId] = useState("7");
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

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
        setUserId(res._id);
      })
      .catch((err) => console.error());
  }, [cognitoUser]);


function addToGarden() {
  console.log("Button working");
  fetch(`/api/addtogarden/${!userid
    ? "Stand By..."
    : userid
}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...props })
  })
    .then(data => data.json());
 }

    return (
        <Card className= "plant-card h-100" style={{ width: 'auto' }}>
        <Card.Img className="h-75"style={{height: 'auto'}} variant="top" src={props.image_url} />
        <Button className={isActive ? 'isActive': null + "plant-button h-25"} onClick={addToGarden && toggleClass} type="submit" id="plant-button">Add {props.name} to Your Garden</Button>
        
      </Card>
    );
  };

export default PlantCard;
