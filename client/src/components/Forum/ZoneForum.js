import { React, useState, useEffect } from "react";
import "./index.css";
import Postcard from "./Postcard";
import Postform from "./Postform";


const ZoneForum = () => {
  const [posts, setPosts] = useState([{zone : "7"}]);
  // set zone to the current users zone
  let zone; 

  useEffect(() => {
     
      fetch(`/api/zoneposts/${zone || "7"}`)
      .then(res => {
        return res.json();
        
        
      }).then(res => setPosts(res))

      .catch(err => console.error());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      <div className="forumWelcome">
      <h2 id="welcomeZone">Welcome to the Zone {posts[0].zone} Forum!</h2>
      </div>
      <Postform zone/>

      <ul className="postlist">
        {posts.length ? (posts.map(each => <li className="post" key={each.id} ><Postcard {...each} /></li>)) : (<h3>No Posts in this zone currently!</h3>)}
      </ul>
        
        
    </div>
  );
};

export default ZoneForum;
