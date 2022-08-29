/*
include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
create your first component
*/

import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("nothing")
	const redSelected = () => {
		setColor("red")
	}
	const yellowSelected = () => {
		setColor("yellow")
	}
	const greenSelected = () => {
		setColor("green")
	}

	let redColored = "";
	if (color == "red") {redColored = "red"} 

	let yellowColored = "";
	if (color == "yellow") {yellowColored = "yellow"} 

	let greenColored = "";
	if (color == "green") {greenColored = "green"} 

	const turningOff = () => {
		setColor(null)
	}
	let index = 0
 
	return (<>
    
		<div className="container">
     
      <div className="semaforo">
        <span className="light-circle red" onClick={redSelected} id={redColored}></span>
        <span className="light-circle yellow" onClick={yellowSelected} id={yellowColored}></span>
        <span className="light-circle green" onClick={greenSelected} id={greenColored}></span>
      </div>
      <div className="stand">
      </div>
      <div className="floor"></div>
       
    </div>
    </>
	);
};

export default Home;
