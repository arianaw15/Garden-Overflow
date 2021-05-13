import React from "react";
import './index.css';

const Postcard = () => {
  return (
    <div className="row justify-content-md-center">
    <div className="card col">
      <div className="card-body">
        <h4 className="card-title">post title</h4>
        <h6 className="card-subtitle mb-2 text-muted">post tag/type</h6>
        <p className="card-text">
          content of the post/question
        </p>
        <a href="#" className="card-link">
          View replies
        </a>
      </div>
    </div>
    </div>
  );
};

export default Postcard;
