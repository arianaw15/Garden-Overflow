import React from 'react';
// import Pagination from '../Pagination/Pagination.js';
import SignOutBtn from '../SignUp/SignOutBtn'
import './index.css';
import logo from './TransparentLogoIcon.png';
import { Link } from "react-router-dom";

function LoggedHeader() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" height="30" className="d-inline-block align-text-top mr-2" />
                        <span className="garden">Garden</span> Overflow
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id="navbarToggler"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/userProfile">My Profile</Link>
                            <Link className="nav-link" to="/Zoneforum">MyZone</Link>
                            <Link className="nav-link" to="/PlantPage">Plant Library</Link>
                            <Link className="signOutButton" to="/Home"><SignOutBtn /></Link>
                            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default LoggedHeader

