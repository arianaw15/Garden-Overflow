
/* eslint-disable default-case */
import React, {useState, useEffect} from 'react';
import { AmplifyAuthenticator, withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Hub, Auth } from 'aws-amplify';
// import LoginGoogle from '../Login/LoginGoogle';

function App() {
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

  return(
    <AmplifyAuthenticator>
       <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
    <div className= "App">
    <AmplifySignOut />
  </div>  
  </AmplifyAuthenticator>
  
  )
}
