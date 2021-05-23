import React from 'react';
import './index.css';
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';
import CreateProfile from '../CreateProfile/ProfileForm.js';

function CreateUser() {
  return (
    <div>
    <LoggedHeader />
      <h6 className="welcomeUser">Welcome!</h6>
      <h4 className="followingInformation">Please Fill out the following information:</h4>
      <CreateProfile />
      <h6 className="hardinessZones">What is a Hardiness Zone?</h6>
      <a href="https://planthardiness.ars.usda.gov/PHZMWeb/" className="clickHere" target="_blank" rel="noopener noreferrer">Click here to find yours!</a>
    </div>
  )
}

export default CreateUser

