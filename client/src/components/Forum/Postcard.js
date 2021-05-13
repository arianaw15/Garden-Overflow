import React from "react";
import "./index.css";

const Postcard = ({ username, title, body, zone, tag, email }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="card col">
        <div className="card-header">
          <a href="#">{username}</a> Posted to Zone: {zone}
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
          <p className="card-text">{body}</p>
          <a href="#" className="card-link">
            View replies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
