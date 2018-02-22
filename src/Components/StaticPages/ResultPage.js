import React from "react";
import "./StaticPages.css";

let ResultPage = (props) => {
    return(
        <div>
            <p>Result :
                {<span> {props.numberOfCorrectAnswers} / {props.optionsLength} </span>}
            </p>
        </div>
    )
};
export default ResultPage;