import React, { useState, useRef } from 'react';
import NewsTicker, { TickerStates } from 'react-advanced-news-ticker';

function TipsRoulette() {
   const ref = useRef(null);
   // const TickerStates = "";
   const [speedAdd, setSpeedAdd] = useState(1);
   const [speed, setSpeed] = useState(1);
   const [duration, setDuration] = useState(0);
   const [shouldStop, setShouldStop] = useState(false);
   const [currentState, setCurrentState] = useState(TickerStates.Stopped);
   const [winner, setWinner] = useState("");
   const getButtonContent = () => {
      if (shouldStop)
         return (
            <>
               <span className="ml-2">Waiting...</span>
            </>
         );
      // else if (winner)
      //    return (
      //       <>
      //          <span className="ml-2">Result: {winner}</span>
      //       </>
      //    );
      else if (currentState === TickerStates.Running)
         return (
            <>
               <span className="ml-2">Stop</span>
            </>
         );
      else
         return (
            <>
               <span className="ml-2">Spin for a new tip!</span>
            </>
         );
   };
   const startSpin = () => {
      if (currentState === TickerStates.Stopped) {
         setSpeed(1);
         setSpeedAdd(1);
         setDuration(0);
         ref.current.startButtonClick();
         setCurrentState(TickerStates.Running);
      } else if (currentState === TickerStates.Running) {
         setShouldStop(true);
      }
   };

   return (
      <>
         <NewsTicker
            id="nt-example3"
            rowHeight={25}
            maxRows={2}
            duration={duration}
            speed={speed}
            ref={ref}
            autoStart={false}
            pauseOnHover={false}
            style = {{'list-style-type': 'none'}}
            hasMoved={() => {
               if (speed > 700) {
                  ref.current.stopButtonClick();
                  setWinner(ref.current.state.items[0]);
                  setCurrentState(TickerStates.Stopped);
                  setShouldStop(false);
                  setTimeout(() => {
                     setWinner("");
                  }, 4000);
               } else if (shouldStop) {
                  setSpeedAdd(speedAdd * 1.4);
                  setSpeed(speed + speedAdd);
                  setDuration(speed + 25);
               }
            }}>
            {/* <div style={{'fontSize': '36px'}}>
               Click the button to get a random tip!
            </div> */}
            <div>Make a drip feeder using a 2 liter bottle to hydrate plants that do better when water is supplied directly at the root instead of from overhead, such as vegetables. <a href="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Make_a_drip_feeder_using_an_old_soda_bottle">Click here for full details!</a></div>
            <div>If you're growing tomatoes, especially in a drier climate (zones x, y, z), be sure you're watering them from the base instead of drenching the leaves. <a href="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Water_your_tomatoes_the_right_way">Click here for full details!</a></div>
            <div>Sprinkle some baking soda on the soil around your tomato plants to neutralize acidity in the soil and produce sweeter tomatoes! < a href ="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Grow_sweeter_tomatoes_using_baking_soda">Click here for more details!</a></div>
            <div>Plant a cluster of certain herbs together to make a natural mosquito repellent! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Mosquito_control_herbs">Click here for full details!</a></div>
         </NewsTicker>
         <span className="button mt-2" id="nt-example3-button" onClick={startSpin}>
            {getButtonContent()}
         </span>
      </>
   )

}

export default TipsRoulette