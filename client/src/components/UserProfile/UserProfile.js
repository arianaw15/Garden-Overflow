import React, { useState, useEffect } from 'react';
import './index.css';
import { Auth } from 'aws-amplify';
import LoggedHeader from '../LoggedHeader/LoggedHeader.js';

function UserProfile() {


    let [cognitoUser, setCognitoUser] = useState({})
    useEffect(() => {

        Auth.currentAuthenticatedUser({
            bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => setCognitoUser(user))
            .catch(err => console.log(err));
    }, []);
    console.log(cognitoUser)
    return (
        <div>
        <LoggedHeader />
            <div className="row py-5 px-4">
                <div className="col-md-12 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" /><a href="/UserAttributes" id="editButton" className="btn btn-outline-light btn-sm btn-block">Edit Profile</a></div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{!cognitoUser.attributes ? "" : cognitoUser.attributes.nickname}</h4>
                                    <p className="small mb-4" id="userName"> <i className="fas fa-map-marker-alt mr-2"></i>Marc Zooleo</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div> */}
                        <div className="px-4 py-5" id="profileBackground">
                            <h5 className="mb-0" id="aboutWord">About</h5>
                            <div className="p-4 rounded shadow-sm" id="profileAboutBackground">
                                <p className="font-italic mb-0">Plant Hardiness Zone: 5</p>
                                <p className="font-italic mb-0">Lives in: Salt Lake City</p>
                                {/* <p className="font-italic mb-0">Favorites: </p> */}
                            </div>
                        </div>
                        <div className="py-4 px-4" id="profileBackground">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent favorited plants</h5><a href="/" id="allPlantsButton" className="btn btn-link text-muted">Show all</a>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                                <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default UserProfile