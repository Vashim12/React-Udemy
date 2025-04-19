import React from "react";
import './style.css'
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Morning = White, Afternoon = Red, Night = Black.

function DateChallenge() {

    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
     color: "",
    };

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.color = "White";
      } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "Red";
      } else {
        greeting = "Good Night";
        customStyle.color = "Black";
      }
    
    return(
        <h1 className="heading" style={customStyle}>{greeting}</h1>
    )
}

export default DateChallenge;