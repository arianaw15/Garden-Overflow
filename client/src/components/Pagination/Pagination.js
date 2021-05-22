import SignOutBtn from '../SignUp/SignOutBtn'
import React from 'react';
import './index.css';

function Pagination() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="/Login">Login</a>
            <a className="nav-link" href="/SignUp">Create Account</a>
            <a className="nav-link" href="/Zoneforum">MyZone</a>
            <a className="nav-link" href="/userProfile">My Profile</a>
            <a className="nav-link" href="/PlantPage">Plant Library</a>
            <SignOutBtn />
            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </div>
    </div>
    )
}

export default Pagination

