import React from 'react';
import './index.css'
import { Auth } from 'aws-amplify'


function SignOutBtn() {
async function signOut() {
    try {
        await Auth.signOut();
        console.log('signed out')
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

return (

    <button className="signOutBtn" onClick={signOut}>Log Out</button>

)
}
export default SignOutBtn;