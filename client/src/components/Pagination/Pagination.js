import React from 'react';
import './index.css';

function Pagination() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </div>
    </div>
    )
}

export default Pagination

