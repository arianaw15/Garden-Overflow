import React from 'react';
import './index.css';
import logo from './transparentLogo.png'

function Footer() {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11">
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <img src={logo} alt=""  height="150" style={{marginBottom: "20px", marginLeft: "20px"}} className="d-inline-block align-text-top mr-2" />
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <li>Home</li>
                                    <li>Login</li>
                                    <li>Our Mission</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>CONTRIBUTERS</b></h6>
                                <ul className="list-unstyled">
                                    <li>Ariana Winters</li>
                                    <li>Brandon Ashby</li>
                                    <li>James Walker</li>
                                    <li>Justin McDonald</li>
                                    <li>Landon Ross</li>
                                </ul>
                                {/* <p className="mb-1">Contributers</p> */}
                                {/* <p>SEAWOODS SECTOR</p> */}
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p className="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> Garden Overflow All Rights Reserved.</small>
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
    )
}

export default Footer
