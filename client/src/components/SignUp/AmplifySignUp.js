/* eslint-disable default-case */
import React, { useEffect } from "react";
import "./index.css";
import Amplify, { Hub, Auth } from "aws-amplify";
import { AmplifySignUp } from "@aws-amplify/ui-react";
import awsconfig from "../../aws-exports";
import userState from "../../utils/UserState";
import { useRecoilState } from "recoil";
import { Redirect } from "react-router";

Amplify.configure(awsconfig);

function AmpSignUp() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => setUser(userData));
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in"));
  }
  console.log(user);

  //Return

  return user ? (
    <Redirect to={"/userprofile"} />
  ) : (
    <div>
      <AmplifySignUp
        className="amplify-signup"
        slot="sign-up"
        formFields={[
          {
            type: "username",
            label: "Email:",
            placeholder: "Enter your email address",
          },
          {
            type: "email",
            label: "Verify Email:",
            placeholder: "Verify your email address",
          },
          { 
            type: "password" 
          },
          { type: "locale", 
          label: "Zip Code:",
          placeholder: "Zip code" 
          },
          { type: "nickname",
            label: "Enter a unique user name:"
          },
        ]}
      />
    </div>
  );
}

export default AmpSignUp;
