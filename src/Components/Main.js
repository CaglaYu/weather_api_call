import React from "react"
//import Sparkle from 'react-sparkle'
import Sparkle  from './Sparkles';
import myFrame from "../images/leaves2.jpg"
import './Main.css';

export default function Main() {
    return ( <SparklyThing/>)
}



const SparklyThing = () => (
  <div className="myFrame">
      <img src={myFrame}  className="sparkles" />
      <Sparkle flicker={false}  overflowPx={0}   />
  </div>
)