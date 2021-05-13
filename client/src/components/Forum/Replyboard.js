import React from "react";
import './index.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CommentCard from './CommentCard';
import axios from 'axios';

const Replyboard = () => {
    let postid;
    return (
        <div>
            <Header />
        <div className="container commentBoard">
        {axios.get(`/api/comments/${postid}`).then(result => result.map(each => <CommentCard {...each}/>))}
        </div>
            <Footer />
        </div>
    )
}

export default Replyboard