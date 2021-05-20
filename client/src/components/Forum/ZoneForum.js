import { React, useState, useEffect } from "react";
import "./index.css";
import Postcard from "./Postcard";
import Postform from "./Postform";
import axios from "axios";

const postArr = [
  {userName : "Plantnerd",
   title : "I love plantsomuch",
   body : "plants are great, all my friends are plants. I'm so happy. this is fine",
   zone : "7",
   tag : "Rant"
  },
  {userName : "MYEARP",
   title : "I grow broccoli",
   body : "so much broccoli, I'm very regular",
   zone : "7",
   tag : "Question"
  },
  {userName : "Rick",
   title : "Hydroponics",
   body : "All my plants area amazing, they grow in nutrient solution",
   zone : "7",
   tag : "GardenBrag"
  },
  {userName : "dudebro",
   title : "arugula is tight",
   body : "so tasty and flavorful, gotta have it",
   zone : "7",
   tag : "Advice"
  },
  {userName : "ohboyleaves",
   title : "Squash",
   body : "is it a squash or a corgette?",
   zone : "7",
   tag : "Article"
  }
];

const ZoneForum = () => {
  const [posts, setPosts] = useState(postArr);

  // useEffect(() => {
     
  //     fetch("http://localhost:3001/api/zoneposts/7")
  //     .then(res => {
  //       setPosts(res);
  //       console.log(posts);
  //     })
  //     .catch(err => console.error());
  // }, [])
  
  return (
    <div>
      <div className="row justify-content-center forumWelcome">
      <h2>Welcome to the Zone {posts[0].zone} Forum!</h2>
      </div>
      <Postform />

      <ul className="postlist">
        {posts.length ? (posts.map(each => <li className="post" key={each.id} ><Postcard {...each} /></li>)) : (<h3>No Posts in this zone currently!</h3>)}
      </ul>
        
        
    </div>
  );
};

export default ZoneForum;
