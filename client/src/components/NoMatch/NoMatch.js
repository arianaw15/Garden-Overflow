import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import BIRDS from 'vanta/src/vanta.clouds.js';
import './index.css';
import Header from '../Header/Header.js';

function NoMatch() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        THREE,
        el: myRef.current,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div>
      <Header />
      <div ref={myRef} id="birdBackground">
        <h1 className="errorCode">
          It appears this page isn't in the cloud..
            </h1>
      </div>
    </div>
  )
}

export default NoMatch