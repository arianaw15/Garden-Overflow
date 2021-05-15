import React from 'react';
import './index.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator,AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const AmpSignIn = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return(
        <AmplifyAuthenticator>
        <AmplifySignIn
          headerText="My Custom Sign In Text"
          slot="sign-in"
        ></AmplifySignIn>
      </AmplifyAuthenticator>
  );
}

export default AmpSignIn;