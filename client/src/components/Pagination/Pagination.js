// import SignOutBtn from '../SignUp/SignOutBtn'
import React from 'react';
import './index.css';

function Pagination() {

    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            {/* <a className="nav-link" href="/Login">Login</a> */}
            <a className="nav-link" href="/SignUp">Login/Create Account</a>
            {/* <a href="/Home"><SignOutBtn /></a> */}
            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </div>
    </div>
    )
}

export default Pagination

