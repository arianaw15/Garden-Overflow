import React from 'react';
import LoggedHeader from "../LoggedHeader/LoggedHeader.js";
import { Auth } from 'aws-amplify';

function UserAttributes() {
    return (
        <div>
        <LoggedHeader />
        <h1 style={{textAlign: "center", color: "#82FF9E", position: "relative", top: "80px"}}>
            Coming Soon!
        </h1>
        </div>
    )
}

export default UserAttributes
