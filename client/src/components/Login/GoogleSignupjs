import React, { useState} from "react";
import { GoogleLogin } from "react-google-login";
require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function Login() {
    const [name, setName] = useState("");
    const responseGoogle = (response) => {
        console.log(response);
        setName(response.profileObj.name);
      }
    
      return (
        <div >
          <GoogleLogin
          clientId= {clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        </div>
      );
}

export default Login