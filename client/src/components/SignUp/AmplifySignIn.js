/* eslint-disable default-case */
import React, {useEffect} from 'react';
import './index.css';
import Amplify, {Hub, Auth} from 'aws-amplify';
import { AmplifyAuthenticator,AmplifySignIn, AmplifyGoogleButton } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
import userState from '../../utils/UserState';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router';
import AmplifyGoogle from './AmplifyGoogle';
import Header from '../Header/Header.js';

Amplify.configure(awsconfig);

const AmpSignIn = () => {
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

  return user ? <Redirect to = {'/userprofile'} /> :(
    <>
    <div>
      <Header />
    <div id="userLoginContainer">
      <h6 className="userLogin">Welcome Back!</h6>
      </div>
      <AmplifyAuthenticator>
        <div slot="sign-in">
          <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content">You’re unbe<span className="leaf">leaf</span>able! &#127804;</div>
            <div slot="federated-buttons">
              <AmplifyGoogleButton onClick={() => Auth.federatedSignIn({provider: 'Google'})} />
              <hr />
            </div>
          </AmplifySignIn>
        </div>
      </AmplifyAuthenticator>
      </div>
    </>
  );
}

export default AmpSignIn;