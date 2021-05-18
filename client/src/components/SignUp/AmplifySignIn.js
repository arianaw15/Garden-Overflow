/* eslint-disable default-case */
import React, {useEffect} from 'react';
import './index.css';
import Amplify, {Hub, Auth} from 'aws-amplify';
import { AmplifyAuthenticator,AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import userState from '../../utils/UserState';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router';

Amplify.configure(awsconfig);

const AmpSignIn = () => {
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
      .then(userData => userData.attributes)
      .catch(() => console.log('Not signed in'));
  }

  return user ? <Redirect to = {'/userprofile'} /> :(
        <AmplifyAuthenticator>
        <AmplifySignIn
          headerText="My Custom Sign In Text"
          slot="sign-in"
        ></AmplifySignIn>
      </AmplifyAuthenticator>
  );
}

export default AmpSignIn;