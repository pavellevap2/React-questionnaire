import React from 'react';
import {Link} from 'react-router-dom';

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];

let Question = (props) =>{
    return (
        <div className="b-first">
            <p>Select option</p>
            <form action="">
                {
                    questions[props.arrayIndex][1].map((c, i) =>
                        <p key={i}>
                            <input type="radio" name="questions"
                                   key={i}
                                   onChange={() => props.onChange(i)}/>
                            <span>{c}</span>
                        </p>
                )}
            </form>
                <p><Link to={props.linkTo}>Next question</Link></p>
        </div>
    )
};

export {questions, Question};