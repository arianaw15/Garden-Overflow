import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
// To federated sign in from Google
const AmplifyGoogle = () => {

    useEffect(() => {
        const ga = window.gapi && window.gapi.auth2 ? 
            window.gapi.auth2.getAuthInstance() : 
            null;

        if (!ga) createScript();
    }, [])

    const signIn = () => {
        const ga = window.gapi.auth2.getAuthInstance();
        ga.signIn().then(
            googleUser => {
                getAWSCredentials(googleUser);
            },
            error => {
                console.log(error);
            }
        );
    }

    const getAWSCredentials = async (googleUser) => {
        const { id_token, expires_at } = googleUser.getAuthResponse();
        const profile = googleUser.getBasicProfile();
        let user = {
            email: profile.getEmail(),
            name: profile.getName()
        };

        const credentials = await Auth.federatedSignIn(
            'google',
            { token: id_token, expires_at },
            user
        );
        console.log('credentials', credentials);
    }

    const createScript = () => {
        // load the Google SDK
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.onload = initGapi;
        document.body.appendChild(script);
    }

    const initGapi = () => {
        // init the Google SDK client
        const g = window.gapi;
        g.load('auth2', function() {
            g.auth2.init({
                client_id: 'your_google_client_id',
                // authorized scopes
                scope: 'profile email openid'
            });
        });
    }

    return (
        <div>
            <button onClick={signIn}>Sign Up With Google</button>
        </div>
    );
}

export default AmplifyGoogle