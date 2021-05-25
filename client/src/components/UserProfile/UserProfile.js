import React, { useState, useEffect } from "react";
import "./index.css";
import { Auth } from "aws-amplify";
import LoggedHeader from "../LoggedHeader/LoggedHeader.js";
import ScrollToTop from "../ScrollToTop/scrollToTop";
import GardenCard from "./GarderCard";
import { Row, Col, Container } from "react-bootstrap";

function UserProfile() {
  let [user, setUser] = useState({});
  let [cognitoUser, setCognitoUser] = useState({});
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log(user);
        setCognitoUser(user);
      })
      .catch((err) => console.log(err));
  }, []);
  

  useEffect(() => {
    fetch(
      `/api/getuser/${
        !cognitoUser.attributes
          ? "Stand By..."
          : cognitoUser.attributes.nickname
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setUser(res);
      })
      .catch((err) => console.error());
  }, [cognitoUser]);
  return (
    <div>
      <LoggedHeader />
      <div className="row py-5 px-4">
        <div className="col-md-12 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="..."
                    width="130"
                    className="rounded mb-2 img-thumbnail"
                  />
                  <a
                    href="/UserAttributes"
                    id="editButton"
                    className="btn btn-outline-light btn-sm btn-block"
                  >
                    Edit Profile
                  </a>
                </div>
                <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0" id="userName">
                    {!cognitoUser.attributes
                      ? "Stand By..."
                      : cognitoUser.attributes.nickname}
                  </h4>
                  {/* <p className="small mb-4" id="userName"> <i className="fas fa-map-marker-alt mr-2"></i>Marc Zooleo</p> */}
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
              <h5 className="mb-0" id="aboutWord">
                About
              </h5>
              <div
                className="p-4 rounded shadow-sm"
                id="profileAboutBackground"
              >
                <p className="font-italic mb-0">
                  Plant Hardiness Zone: {!user ? "standby..." : user.zone}
                </p>
                {/* <p className="font-italic mb-0">Favorites: </p> */}
              </div>
            </div>
            <div className="py-4 px-4" id="profileBackground">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent favorited plants</h5>
                <a
                  href="/"
                  id="allPlantsButton"
                  className="btn btn-link text-muted"
                >
                  Show all
                </a>
              </div>
              <Container>
                <h2 className="hardinessZonePlants">
                  Plants for hardiness zone:{" "}
                </h2>
                <Row className="plantcard" md={3}>
                  {!user ? "standby" : (
                    user.garden.map((each) => (
                      <Col className="plant" key={each.id}>
                        <GardenCard {...each} />
                      </Col>
                    ))
                  )}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default UserProfile;
