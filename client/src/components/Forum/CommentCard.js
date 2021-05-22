import React from "react";
import "./index.css";

const Commentcard = ({ userName, body }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="card col">
        <div className="card-header">
          <span className="username">{userName}</span> commented
        </div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Commentcard;