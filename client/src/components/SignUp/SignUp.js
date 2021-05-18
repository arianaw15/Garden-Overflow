
/* eslint-disable default-case */
import React, {useState, useEffect} from 'react';
import { AmplifyAuthenticator, withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Hub, Auth } from 'aws-amplify';
import AmplifyGoogle from './AmplifyGoogle'
import userState from '../../utils/UserState';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router';
// import LoginGoogle from '../Login/LoginGoogle';

function SignUp() {
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
      .then(userData => userData.attributes)
      .catch(() => console.log('Not signed in'));
  }
console.log(user)
  return user ? <Redirect to = {'/userprofile'} /> : (
    <>
    <AmplifyGoogle />
    <AmplifyAuthenticator>
      
       <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
    <div className= "App">
    <AmplifySignOut />
  </div>  
  </AmplifyAuthenticator>
  </>
  )
}

export default SignUp