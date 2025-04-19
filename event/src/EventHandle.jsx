import React, { useState } from "react";
import './style.css';

function  EventHandle() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleClick() {
        setHeadingText("Submitted")
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return(
        <div className="container">
            <h1>{headingText}</h1>
            <button 
               style={{backgroundColor: isMouseOver ? "black" : "white"}}
               onClick={handleClick}
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
            >
               Submit
            </button>
        </div>
    )
}

export default EventHandle;