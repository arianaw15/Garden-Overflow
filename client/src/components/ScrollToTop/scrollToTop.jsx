import React from 'react';
import './scrollToTop.css';
import ScrollToTop from 'react-scroll-to-top';

export default function toTop() {
   return (
      <div>
         <ScrollToTop smooth color="#008000" className="toTop"/>
      </div>
   )
}