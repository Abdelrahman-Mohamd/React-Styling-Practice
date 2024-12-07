//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let currentTime = date.getHours();

let timeOfTheDay;
let timeOfTheDayColor = {
  color: "",
};

if (currentTime >= 12 && currentTime <= 18) {
  timeOfTheDay = "Afternoon";
  timeOfTheDayColor.color = "green";
} else if (currentTime > 18 && currentTime <= 24) {
  timeOfTheDay = "Night";
  timeOfTheDayColor.color = "blue";
} else {
  timeOfTheDay = "morning";
  timeOfTheDayColor.color = "red";
}
ReactDOM.render(
  <h1 className="heading" style={timeOfTheDayColor}>
    Good {timeOfTheDay}
  </h1>,
  document.querySelector("#root")
);
