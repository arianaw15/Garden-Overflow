/* eslint-disable default-case */
import React, {useEffect} from 'react';
import './index.css'
import Amplify, {Hub, Auth} from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import userState from '../../utils/UserState';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router';

Amplify.configure(awsconfig);

const SignOut = () => {

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
  },[]);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }
  console.log(user);

// async function signOut() {
//     try {
//         await Auth.signOut();
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
// }

  return user ? <Redirect to = {'/Login'} /> :(
      <div>
          <AmplifySignOut />
      </div>
    );
}

export default SignOut;

