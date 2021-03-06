import React from "react";
import "./index.css";

const Postcard = ({ _id, userName, title, body, zone, tag }) => {
  const route = `/ReplyBoard/${_id}`
  return (
    
    <div className="row justify-content-md-center">
      <div className="card col zonePostCards">
        <div className="card-header">
          <span className="username">{userName}</span> Posted to Zone: {zone}
        </div>
        <div className="card-body">
          <h4 className="card-title postTitle">{title}</h4>
          <hr></hr>
          <h6 className="card-subtitle mb-2"><span className={tag}>{tag}</span></h6>
          <p className="card-text postBody">{body}</p>
          <a href={route} className="card-link replyLink">
            View replies
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default Postcard;
