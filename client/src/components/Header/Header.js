import React from 'react';
import Pagination from '../Pagination/Pagination.js';
import './index.css';
import logo from './TransparentLogoIcon.png'

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt=""  height="30" className="d-inline-block align-text-top mr-2" />
                        <span className="garden">Garden</span> Overflow
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id="navbarToggler"></span>
                    </button>
                    <Pagination />
                </nav>
            </header>
        </div>
    )
}

export default Header

