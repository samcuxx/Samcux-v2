import React from "react";
import "./RubberBand.css";



const AnimatedLettersFast = ({ letterClass, strArray, idx }) => {
    return (
        <div style={{ display: "inline" }}>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </div>
    )
};
export default AnimatedLettersFast;
