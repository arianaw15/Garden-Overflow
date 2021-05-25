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
      <h6 className="mt-3 hardinessZones">What is a Hardiness Zone? &nbsp;<a href="https://planthardiness.ars.usda.gov/PHZMWeb/" target="_blank" rel="noopener noreferrer" className="clickHere">Click here to find yours!</a></h6>
      
    </div>
  )
}

export default CreateUser

