import React from "react";
import './index.css';
import Postcard from './Postcard'
import axios from 'axios'

const ZoneForum = () => {
    return (
        <div className="container">
            {axios.get("/zoneposts/:zone").then(result => result.map(each => <Postcard {...each}/>))}
        </div>
    )
}

export default ZoneForum
