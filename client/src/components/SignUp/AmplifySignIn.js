/* eslint-disable default-case */
import React, {useEffect, useState} from 'react';
import './index.css';
import Amplify, {Hub, Auth} from 'aws-amplify';
import { AmplifyAuthenticator,AmplifySignIn, AmplifyGoogleButton } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
import { Redirect } from 'react-router';

Amplify.configure(awsconfig);

function AmpSignIn() {
  const [user, setUser] = useState(null);

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

  return user ? <Redirect to = {'/userprofile'} /> :(
    <>
      <h6 className="userLogin">Welcome Back!</h6>
      <AmplifyAuthenticator>
        <div slot="sign-in">
          <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content">You’re unbeleafable! &#127804;</div>
            <div slot="federated-buttons">
              <AmplifyGoogleButton  onClick={() => Auth.federatedSignIn({provider: 'Google'})} />
              <hr />
            </div>
          </AmplifySignIn>
        </div>
      </AmplifyAuthenticator>
    </>
  );
}

export default AmpSignIn;