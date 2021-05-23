import React from 'react';
import './index.css';
import logo from './TransparentFullLogo.png'
import LoginGoogle from '../Login/LoginGoogle'

function UserLogin() {
  return (
    <div>
      <div>
        <h6 id="welcomeBack">Welcome Back!</h6>
      </div>
    <form>
      {/* <div id="userLoginContainer">
      <h6 className="userLogin">Welcome Back!</h6>
      </div> */}
      <div className="d-flex p-2 justify-content-center">
        <img src={logo} alt="" width="200" className="img-fluid" style={{position: "relative", top: "80px"}} />
      </div>
      <div className="google">
      <LoginGoogle />
      </div>
    </form>
    </div>
  )
}

export default UserLogin

