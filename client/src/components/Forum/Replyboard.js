import { React, useState, useEffect } from "react";
import "./index.css";
import CommentCard from "./CommentCard";
import Commentform from "./Commentform";
import { Auth } from 'aws-amplify';


const commArr = [
  {
    userName: "Plantnerd",
    postid: "60a5b5040c777b3a3819c44b",
    body: "plants are great, all my friends are plants. I'm so happy. this is fine",
  },
  {
    userName: "MYEARP",
    postid: "60a5b5040c777b3a3819c44b",
    body: "so much broccoli, I'm very regular",
  },
  {
    userName: "Rick",
    postid: "60a5b5040c777b3a3819c44b",
    body: "All my plants area amazing, they grow in nutrient solution",
  },
  {
    userName: "dudebro",
    postid: "60a5b5040c777b3a3819c44b",
    body: "so tasty and flavorful, gotta have it",
  },
  {
    userName: "ohboyleaves",
    postid: "60a5b5040c777b3a3819c44b",
    body: "is it a squash or a corgette?",
  },
];

const Replyboard = (props) => {
  const [comments, setComments] = useState(commArr);
  const postid =  props.postid.match.params.postid;
  let [cognitoUser, setCognitoUser] = useState({});
  useEffect(() => {
    fetch(`/api/comments/${postid || "60a5b5040c777b3a3819c44b"}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setComments(res))

      .catch((err) => console.error());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {

    Auth.currentAuthenticatedUser({
        bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        console.log(user);
        setCognitoUser(user)})
        .catch(err => console.log(err));
}, []);

  return (
    <div>
      <div className="row justify-content-center">
        <Commentform postid username={!cognitoUser.attributes ? "Stand By..." : cognitoUser.attributes.nickname}/>
      </div>

      <ul className="postlist">
        {comments.length ? (
          comments.map((each) => (
            <li key={each.id} className="post">
              <CommentCard {...each} />
            </li>
          ))
        ) : (
          <h3>Be the First to comment!</h3>
        )}
      </ul>
    </div>
  );
};

export default Replyboard;
