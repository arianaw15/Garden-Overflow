import { React, useState } from "react";
import "./index.css";
import Postcard from "./Postcard";
import axios from "axios";

const ZoneForum = () => {
  const [posts, setPosts] = useState([]);
  axios
    .get("localhost:3001/api/zoneposts/7")
    .then((res) => setPosts(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <div className="container">
        
        {posts.length ? (posts.map(each => <li key={each.id} ><Postcard {...each} /></li>)) : (<h3>No Posts in this zone currently!</h3>)}
        
      </div>
    </div>
  );
};

export default ZoneForum;
