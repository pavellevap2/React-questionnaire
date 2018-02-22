import React from 'react';
import {Link} from 'react-router-dom';
import {questions} from "../Questionnaire/Questionnare";

let Question = (props) =>{
    return (
        <div className="b-first">
            {questions[props.questionNumber][1].map((optionText, optionNumber) =>
                <p key={optionNumber}>
                    <input type="radio" name="questions"
                           key={props.questionNumber + ":" + optionNumber}
                           onChange={() => props.onChange(optionNumber)}/>
                    <span>{optionText}</span>
                </p>
            )}
            <p><Link to={props.nextURL}>Next</Link></p>
        </div>
    )
};

export default Question;