import React from 'react';
import './index.css'
import Amplify, {Auth} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import AmplifyGoogle from './AmplifyGoogle';

Amplify.configure(awsconfig);

function AuthStateApp() {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  //Return

  return(
      
        <div>
            <div>
        <AmplifyGoogle />
        </div>
            <AmplifySignUp className="amplify-signup"
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]}
        />
        
        </div>
  );
        }


export default AuthStateApp;