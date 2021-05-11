import React from 'react'
import {useGoogleLogout} from 'react-google-login';

require('dotenv').config();

const clientId = process.env.GOOGLE_CLIENT_ID

function Logout() {
    const { signOut } = useGoogleLogout({
        clientId,
    })
    return (
        <div>
           <button
           onClick = {signOut} 
           >

           </button>
        </div>
    )
}

export default Logout
