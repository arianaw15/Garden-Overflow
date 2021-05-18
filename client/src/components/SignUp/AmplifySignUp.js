/* eslint-disable default-case */
import React, {useEffect} from 'react';
import './index.css'
import Amplify, {Hub, Auth} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import AmplifyGoogle from './AmplifyGoogle';
import userState from '../../utils/UserState';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router';

Amplify.configure(awsconfig);

function AmpSignUp() {
    // const [authState, setAuthState] = React.useState();
    // const [user, setUser] = React.useState();

    // React.useEffect(() => {
    //     return onAuthUIStateChange((nextAuthState, authData) => {
    //         setAuthState(nextAuthState);
    //         setUser(authData)
    //     });
    // }, []);

    const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }
  console.log(user);

  //Return

  return user ? <Redirect to = {'/userprofile'} /> : (
      
        <div>
            <div>
        <AmplifyGoogle />
        </div>
            <AmplifySignUp className="amplify-signup"
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" },
            {type:"locale"}
          ]}
        />
        
        </div>
  );
        }


export default AmpSignUp;