import React from "react";
import { GoogleLogin } from "react-google-login";

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
        clientId="175590003618-r1inp9njjg3vbdkc1kvol0t5orm0bnaa.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
