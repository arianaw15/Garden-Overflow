import { React, useState } from "react";
import "./index.css";
import CommentCard from "./CommentCard";
import Commentform from "./Commentform";
import axios from "axios";

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

const Replyboard = () => {
  const [comments, setComments] = useState(commArr);

  return (
    <div>
      <div className="row justify-content-center">
        <Commentform postid />
      </div>

      <ul className="postlist">
        {comments.length ? (
          comments.map((each) => (
            <li key={each.id}>
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
