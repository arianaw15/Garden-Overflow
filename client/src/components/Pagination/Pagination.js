// import SignOutBtn from '../SignUp/SignOutBtn'
import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

function Pagination() {

    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            {/* <a className="nav-link" href="/Login">Login</a> */}
            <Link className="nav-link" to="/SignUp">Login/Create Account</Link>
            {/* <a href="/Home"><SignOutBtn /></a> */}
            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </div>
    </div>
    )
}

export default Pagination

