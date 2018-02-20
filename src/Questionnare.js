import React from "react";
import _ from "lodash";

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];

let curry = _.curry;
let nth = (i) => xs => xs[i];
let append = curry((x, xs) => xs.concat([x]));

let answers = questions.map(nth(0), questions);
let equals = (x1, x2) => x1 === x2;

class Questionnare extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showResult : false,
            answers:[]
        }
    }

    selectOption(option){
        this.setState({
            answers : append(option, this.state.answers)
        })
    }
    toggleButton(){
        this.setState({
            showResult : !this.state.showResult
        })
    }

    render(){
        let correctAnswers = _.zipWith(equals(), answers, this.state.answers);

        return(
            <div>
                <div className="b-first">
                    <form action="">
                        <p>Select <b>only</b> one option</p>
                        {questions[0][1].map((c, i) =>
                            <p key={i}>
                                <input type="radio"
                                       name="b-first"
                                       key={i}
                                       onChange={()=>this.selectOption(i)}
                                />
                                <span>{c}</span>
                            </p>
                        )}
                    </form>
                </div>

                <div className="b-second">
                    <form action="">
                        <p>Select <b>only</b> one option</p>
                        {questions[1][1].map((c, i) =>
                            <p key={i}>
                                <input type={"radio"}
                                       name="b-first"
                                       key={i}
                                       onChange={() => this.selectOption(i)}
                                />
                                <span>{c}</span>
                            </p>
                        )}
                    </form>

                </div>

                <div className="b-third">
                    <form action="">
                        <p>Select <b>only</b> one option</p>
                        {questions[2][1].map((c, i) =>
                            <p key={i}>
                                <input type={"radio"}
                                       name="b-first"
                                       key={i}
                                       onChange={() => this.selectOption(i)}
                                />
                                <span>{c}</span>
                            </p>
                        )}
                    </form>
                </div>

                <div>
                    <button onClick={()=> this.toggleButton()}>See result</button>
                        ? <p>
                            <span>Result : </span>
                            {
                                <span>
                                    {questions.length - correctAnswers} / {questions.length}
                                </span>
                            }
                            </p>
                        : false
                    }
                </div>
            </div>
        )
    }

}
export default Questionnare;