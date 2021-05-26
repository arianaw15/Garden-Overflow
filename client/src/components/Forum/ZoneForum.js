import { React, useState, useEffect } from "react";
import "./index.css";
import Postcard from "./Postcard";
import Postform from "./Postform";
import { Auth } from "aws-amplify";
import LoggedHeader from "../LoggedHeader/LoggedHeader.js";
import ScrollToTop from "../ScrollToTop/scrollToTop";

const ZoneForum = () => {
  const [posts, setPosts] = useState([{ zone: "7" }]);
  // set zone to the current users zone
  let [zone, setZone] = useState("7");
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
        setZone(res.zone);
      })
      .catch((err) => console.error());
  }, [cognitoUser]);

  useEffect(() => {
    fetch(`/api/zoneposts/${zone || "7"}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setPosts(res))

      .catch((err) => console.error());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zone]);

  return (
    <div>
      <LoggedHeader />
      <div className="forumWelcome">
        <h2 id="welcomeZone">Welcome to the Zone {zone} Forum!</h2>
      </div>
      <Postform
        zone = {zone}
        username={
          !cognitoUser.attributes
            ? "Stand By..."
            : cognitoUser.attributes.nickname
        }
      />

      <ul className="postlist">
        {posts.length ? (
          posts.map((each) => (
            <li className="post" key={each.id}>
              <Postcard {...each} />
            </li>
          ))
        ) : (
          <h3>No Posts in this zone currently!</h3>
        )}
      </ul>

      <ScrollToTop />
    </div>
  );
};

export default ZoneForum;
