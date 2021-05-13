import React from "react";
import './index.css';
import Postcard from './Postcard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'

const ZoneForum = () => {
    let zone = 7;
    return (
        <div>
            <Header />
        <div className="container">
            {axios.get(`/api/zoneposts/${zone}`).then(result => result.map(each => <Postcard {...each}/>))}
        </div>
            <Footer />
        </div>
    )
}

export default ZoneForum
