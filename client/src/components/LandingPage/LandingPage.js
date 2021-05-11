import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import BIRDS from 'vanta/src/vanta.birds.js';
import './index.css';

function LandingPage() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
        THREE,
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

    return (
        <div ref={myRef} id="birdBackground">

        </div>
    )
}

export default LandingPage

