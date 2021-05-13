import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import BIRDS from 'vanta/src/vanta.birds.js';
import logo from './transparentLogo.png'
import './index.css';

function LandingPage() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
        THREE,
          el: myRef.current,
          scale: 1.00,
          scaleMobile: 1.00,
          color1: 0xe57500,
          color2: 0x1d6b06,
          backgroundColor: 0x81c36
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

    return (
      <div ref={myRef} id="birdBackground">
          {/* <img src={logo} alt="Garden Overflow" className="imgLogo" /> */}
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <div className="card w-75 mx-auto"> 
                <div className="card-body p-2">
                  <h4 className="text-center pb-2">Gardening Tip of the Day:</h4>
                  <div className="card w-100 mx-auto">
                    <div className="card-body">
                      Tip of the day placeholder!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LandingPage

