import React, { useState, useRef } from 'react';
import NewsTicker, { TickerStates } from 'react-advanced-news-ticker';

function TipsRoulette() {
   const ref = useRef(null);
   const [speedAdd, setSpeedAdd] = useState(1);
   const [speed, setSpeed] = useState(1);
   const [duration, setDuration] = useState(0);
   const [shouldStop, setShouldStop] = useState(false);
   const [currentState, setCurrentState] = useState(TickerStates.Stopped);

   const getButtonContent = () => {
      if (shouldStop)
         return (
            <>
               <span className="ml-2">Waiting...</span>
            </>
         );
      else if (currentState === TickerStates.Running)
         return (
            <>
               <span className="ml-2" id="stopSpinner">Stop</span>
            </>
         );
      else
         return (
            <>
               <button className="ml-2" id="tipSpinner">Spin for a new tip!</button>
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
            rowHeight={50}
            maxRows={2}
            duration={duration}
            speed={speed}
            ref={ref}
            autoStart={false}
            pauseOnHover={false}
            style = {{'listStyleType': 'none'}}
            hasMoved={() => {
               if (speed > 700) {
                  ref.current.stopButtonClick();
                  setCurrentState(TickerStates.Stopped);
                  setShouldStop(false);
               } else if (shouldStop) {
                  setSpeedAdd(speedAdd * 1.4);
                  setSpeed(speed + speedAdd);
                  setDuration(speed + 25);
               }
            }}>
            <div>Make a drip feeder using a 2 liter bottle to hydrate plants that do better when water is supplied directly at the root instead of from overhead, such as vegetables. <a href="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Make_a_drip_feeder_using_an_old_soda_bottle" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>If you're growing tomatoes, especially in a drier climate (zones x, y, z), be sure you're watering them from the base instead of drenching the leaves. <a href="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Water_your_tomatoes_the_right_way" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Sprinkle some baking soda on the soil around your tomato plants to neutralize acidity in the soil and produce sweeter tomatoes! < a href ="https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Grow_sweeter_tomatoes_using_baking_soda" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Plant a cluster of certain herbs together to make a natural mosquito repellent! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Mosquito_control_herbs" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Attract hummingbirds and add extra color to your garden with a few specific plants! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Attract_hummingbirds_to_your_garden" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Use a coffee filter in the bottom of plant pots to minimize dirt leakage! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Stop_leaking_planters_from_getting_dirt_everywhere_with_coffee_filters" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Get a handle on a potential wasp problem with an easy, homemade wasp trap! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Easy_homemade_wasp_trap" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Growing hydrangeas? Tweak the soil pH to achieve the desired color pop! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Turn_hydrangeas_blue_or_pink" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Grow your own herbs for herbal tea for the freshest, pesticide-free cup of tea! <a href = "https://web.archive.org/web/20170723141242/http://blommi.com:80/planting-herbal-tea-garden/" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Live in a drought-prone area? Reduce your environmental footprint by reusing rinsewater! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Reuse_water_in_your_garden" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Build a "Flow Hive" to harvest fresh honey without disturbing the friendly bees! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Build_an_amazing_beehive_that_wont_disturb_the_bees" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
            <div>Use apple cider vinegar to nourish certain plants and deter certain pests! <a href = "https://www.diyncrafts.com/12126/home/gardening/100-expert-gardening-tips-ideas-and-projects-that-every-gardener-should-know#Learn_why_apple_cider_vinegar_is_so_awesome_to_have_around_in_your_garden" target="blank">Learn more here!</a><p className="lineSpacing"> </p><br></br></div>
         </NewsTicker>
         <span className="button mt-2" id="nt-example3-button" onClick={startSpin}>
            {getButtonContent()}
         </span>
      </>
   )

}

export default TipsRoulette