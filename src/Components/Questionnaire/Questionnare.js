import React from "react";
import { Route, Link, Switch} from 'react-router-dom';
import {questions, Question} from "../Question/Question";

const R = require("ramda");

let nth = (i) => xs => xs[i];
let answers = questions.map(nth(0), questions);

let append = R.curry((x, xs) => xs.concat([x]));
let equals = (x1, x2) => x1 === x2;

let HomePage = () => {
    return (
        <div>
            <h1>Srart make questionnaire</h1>
            <p><Link to={"/next/1"}>Start</Link></p>
        </div>
    )
};

let ResultPage = (props) => {
    return(
        <div>
            <p>Result :
                {<span>{props.correctAnswers} / {questions.length}</span>}
            </p>
        </div>
    )
};

class Questionnaire extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showResult : false,
            answers:[],
        }
    }

    selectOption(option){
        this.setState({
            answers : append(option, this.state.answers)
        })
    }

    render(){
        let correctAnswersLength = ((R.zipWith(equals, answers, this.state.answers)).filter(x => x)).length;

        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>

                    <Route path="/next/1" render={() => <Question arrayIndex={0} linkTo={"/next/2"}
                                                             questions={questions}
                                                             onChange={(i) => this.selectOption(i)}/>}/>
                    <Route path="/next/2" render={() => <Question arrayIndex={1} linkTo={"/next/3"}
                                                             questions={questions}
                                                             onChange={(i) => this.selectOption(i)} />}/>
                    <Route path="/next/3" render={() => <Question arrayIndex={2} linkTo={"/next/4"}
                                                             questions={questions}
                                                             onChange={(i) => this.selectOption(i)} />}/>
                    <Route path="/next/4" render={() => <ResultPage correctAnswers={correctAnswersLength}/>}/>

                </Switch>
            </div>

        )
    }

}
export default Questionnaire;