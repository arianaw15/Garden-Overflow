import { React, useState, useEffect } from "react";
import "./index.css";
import Postcard from "./Postcard";
import Postform from "./Postform";
import axios from "axios";
import "./index.css";

const ZoneForum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     try {
      const result = fetch("http://localhost:3001/api/zoneposts/7", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setPosts(result);
      
    } catch (err) {
      console.error();
    }  
    console.log(posts);
  }, [])
  
  return (
    <div>
        {posts.length ? (posts.map(each => <li key={each.id} ><Postcard {...each} /></li>)) : (<h3>No Posts in this zone currently!</h3>)}
        <Postform />
        
    </div>
  );
};

export default ZoneForum;
