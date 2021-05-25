import React from 'react';
import './index.css';
import logo from './transparentLogo.png'
import { Link } from "react-router-dom";
import grass from './grassImage.png';

function Footer() {
    return (
        <div id="footerContainer">
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light" id="inlineBlock">
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11">
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
                                        <Link to="/Login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Our Mission</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>CONTRIBUTORS</b></h6>
                                <ul className="list-unstyled">
                                    {/* <li><Link to="https://github.com/arianaw15" target="blank">Ariana Winters</Link></li>
                                    <li><Link to="https://github.com/bash7325" target="blank">Brandon Ashby</Link></li>
                                    <li><Link to="https://github.com/Jpeyton-hub" target="blank">James Walker</Link></li>
                                    <li><Link to="https://github.com/jmcdonald112358" target="blank">Justin McDonald</Link></li>
                                    <li><Link to="https://github.com/landonross" target="blank">Landon Ross</Link></li> */}
                                    <li><a href="https://github.com/arianaw15" target="blank" id="footLinks">Ariana Winters</a></li>
                                    <li><a href="https://github.com/bash7325" target="blank" id="footLinks">Brandon Ashby</a></li>
                                    <li><a href="https://github.com/Jpeyton-hub" target="blank" id="footLinks">James Walker</a></li>
                                    <li><a href="https://github.com/jmcdonald112358" target="blank" id="footLinks">Justin McDonald</a></li>
                                    <li><a href="https://github.com/landonross" target="blank" id="footLinks">Landon Ross</a></li>
                                </ul>
                                {/* <p className="mb-1">Contributers</p> */}
                                {/* <p>SEAWOODS SECTOR</p> */}
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> Garden Overflow All Rights Reserved.</small>
                            </div>
                            {/* <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 className="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 className="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                            </div> */}
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

