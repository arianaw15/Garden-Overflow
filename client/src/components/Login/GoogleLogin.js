import React from "react";
import { GoogleLogin } from "react-google-login";
import LoginForm from "../LoginForm/LoginForm.js";
import './index.css';

require('dotenv').config();

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <div>
      <LoginForm />
      <GoogleLogin
        className="google"
        clientId=""
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default Login;