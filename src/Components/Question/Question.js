import React from "react";
import {Link} from "react-router-dom";
import {questions, options} from "../Questionnaire/Questionnare";

let Question = (props) =>{
    return (
        <div className="Question">
            <h2 className="Question-title">{questions[props.question]}</h2>
                {options[props.optionNumber][1].map((optionText, optionIndex) =>
                    <p className="Question-options" key={optionIndex}>
                        <input className="Question-input" type="radio" name="questions"
                               key={props.optionNumber + ":" + optionIndex}
                               onChange={() => props.onChange(optionIndex)}/>
                        <span className="Question-text">{optionText}</span>
                    </p>
                )}
                <div className="Question-border"></div>
            <p className="Question-link"><Link to={props.nextURL}>Next question</Link></p>
        </div>
    )
};

export default Question;