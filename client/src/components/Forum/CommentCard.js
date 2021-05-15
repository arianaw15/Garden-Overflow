import React from "react";
import "./index.css";

const Commentcard = ({ username, body }) => {
  return (
      <li>
    <div className="row justify-content-md-center">
      <div className="card col">
        <div className="card-header">
          <a href="#">{username}</a>
        </div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
    </li>
  );
};

export default Commentcard;