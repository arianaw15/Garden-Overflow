import React from "react";
import { GoogleLogin } from "react-google-login";
import '../LoginForm/index.css';
require('dotenv').config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function LoginGoogle() {
    // const [name, setName] = useState("");
    const responseGoogle = (response) => {
        console.log(response);
        // setName(response.profileObj.name);
      }
    
      return (
        <div className="google">
          <GoogleLogin
          clientId= {clientId}
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        </div>
      );
}

export default LoginGoogle