import React from "react";
import { GoogleLogin } from "react-google-login";
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
      <GoogleLogin
        clientId=''
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default Login;