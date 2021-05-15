import {React, useState} from "react";
import './index.css';
import CommentCard from './CommentCard';
import axios from 'axios';

const Replyboard = () => {
    const [comments, setComments] = useState([]);
    let postid;
  axios
    .get(`localhost:3001/api/comments/${postid}`)
    .then((res) => setComments(res.data))
    .catch((err) => console.log(err));
    return (
        <div>
            
        <div className="container commentBoard">
            <ul>
                {comments.length ? (comments.map(each => <li key={each.id}><CommentCard {...each} /></li>)) : (<h3>Be the First to comment!</h3>)}
            </ul>
        </div>
            
        </div>
    )
}

export default Replyboard