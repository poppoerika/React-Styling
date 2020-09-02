//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();
let greeting;
let greetingColor;

if (hours >= 0 && hours < 12) {
  greeting = "Good morning";
  greetingColor = "red";
} else if (hours >= 12 && hours < 18) {
  greeting = "Good Afternoon";
  greetingColor = "green";
} else if (hours >= 18 && hours <= 23) {
  greeting = "Good Evening";
  greetingColor = "blue";
}

let customStyle = {
  color: greetingColor
};

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
