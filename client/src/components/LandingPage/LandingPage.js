import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import TipsRoulette from './TipsRoulette';
import './index.css';

function LandingPage() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
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
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <div className="card w-75 mx-auto"> 
                <div className="card-body p-2">
                  <h4 className="text-center pb-2">Gardening Pro Tips:</h4>
                  <div className="card w-100 mx-auto">
                    <div className="card-body">
                      <TipsRoulette />
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

