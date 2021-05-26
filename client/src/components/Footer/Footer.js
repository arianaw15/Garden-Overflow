import React from 'react';
import './index.css';
import logo from './transparentLogo.png'
import { Link } from "react-router-dom";
import grass from './grassImage.png';

function Footer() {
    return (
        <div id="footerContainer">
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light">
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11" id="footLinks">
                        <div className="row">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <img src={logo} alt="" height="150" style={{ marginBottom: "20px", marginLeft: "20px" }} className="d-inline-block align-text-top mr-2" id="footerLogo" />
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/SignUp">Login</Link>
                                    </li>
                                    <li>
                                        <a href="https://github.com/arianaw15/Garden-Overflow" target="_blank" rel="noopener noreferrer">Github</a>
                                    </li>
                                    {/* <li>
                                        <Link to="/">Our Mission</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact Us</Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>CONTRIBUTORS</b></h6>
                                <ul className="list-unstyled">
                                    <li><a href="https://github.com/arianaw15" target="_blank" rel="noopener noreferrer" id="footLinks">Ariana Winters</a></li>
                                    <li><a href="https://github.com/bash7325" target="_blank" rel="noopener noreferrer" id="footLinks">Brandon Ashby</a></li>
                                    <li><a href="https://github.com/Jpeyton-hub" target="_blank" rel="noopener noreferrer" id="footLinks">James Walker</a></li>
                                    <li><a href="https://github.com/jmcdonald112358" target="_blank" rel="noopener noreferrer" id="footLinks">Justin McDonald</a></li>
                                    <li><a href="https://github.com/landonross" target="_blank" rel="noopener noreferrer" id="footLinks">Landon Ross</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> Garden Overflow All Rights Reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <img src={grass} alt="grass" id="grassImage"/>
                </div>
    )
}

export default Footer

