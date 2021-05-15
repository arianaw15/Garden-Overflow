/* eslint-disable default-case */
import Amplify, { Auth, Hub } from 'aws-amplify';
import React, {Component} from 'react';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

class AmplifyGoogle extends Component {
  state = { user: null, customState: null };

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign Up With Google</button>
      </div>
    );
  }
}

export default AmplifyGoogle;