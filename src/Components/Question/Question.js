import React from 'react';
import {Link} from 'react-router-dom';
import {questions} from "../Questionnaire/Questionnare";

let Question = (props) =>{
    return (
        <div className="b-first">
            <p>Select option</p>
                {questions[props.arrayIndex][1].map((c, i) =>
                        <p key={i}>
                            <input type="radio" name="questions"
                                   key={i}
                                   onChange={() => props.onChange(i)}/>
                            <span>{c}</span>
                        </p>
                )}
                <p><Link to={props.linkTo}>Next question</Link></p>
        </div>
    )
};

export default Question;