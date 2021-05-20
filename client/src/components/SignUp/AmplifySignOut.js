import React from 'react';
import './index.css'
import Amplify from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
// import { useRecoilState } from 'recoil';

Amplify.configure(awsconfig);

const SignOut = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return(
      <div>
          <AmplifySignOut />
      </div>
    );
}

export default SignOut;