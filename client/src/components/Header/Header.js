import React from 'react';
import Pagination from '../Pagination/Pagination.js';
import './index.css';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"><span className="garden">Garden</span> Overflow</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Pagination />
                </nav>
            </header>
        </div>
    )
}

export default Header

