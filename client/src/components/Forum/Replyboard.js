import {React, useState} from "react";
import './index.css';
import CommentCard from './CommentCard';
import Commentform from './Commentform';
import axios from 'axios';

const Replyboard = () => {
    const [comments, setComments] = useState([]);
    let postid;
  
    return (
        <div>
            
        <div className="container commentBoard">
            <Commentform postid/>
            <ul>
                {comments.length ? (comments.map(each => <li key={each.id}><CommentCard {...each} /></li>)) : (<h3>Be the First to comment!</h3>)}
            </ul>
        </div>
            
        </div>
    )
}

export default Replyboard