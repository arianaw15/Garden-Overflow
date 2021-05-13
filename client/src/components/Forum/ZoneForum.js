import React from "react";
import './index.css';
import Postcard from './Postcard'
import axios from 'axios'

const ZoneForum = () => {
    let zone = 7;
    return (
        <div className="container">
            {axios.get(`/api/zoneposts/${zone}`).then(result => result.map(each => <Postcard {...each}/>))}
        </div>
    )
}

export default ZoneForum
