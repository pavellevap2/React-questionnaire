import React from "react";
import {Link} from "react-router-dom";
import {questions, options} from "../Questionnaire/Questionnare";

let QuestionAboutReact = (props) =>{
    return (
        <div className="b-first">
            <h2 className="question-title">{questions[props.question]}</h2>

            {options[props.optionNumber][1].map((optionText, optionIndex) =>
                <p key={optionIndex}>
                    <input type="radio" name="questions"
                           key={props.optionNumber + ":" + optionIndex}
                           onChange={() => props.onChange(optionIndex)}/>
                    <span>{optionText}</span>
                </p>
            )}
            <p><Link to={props.nextURL}>Next</Link></p>
        </div>
    )
};

export default QuestionAboutReact;