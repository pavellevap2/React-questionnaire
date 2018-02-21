import React from "react";
import { Route, Link, Switch} from "react-router-dom";
import  Question from "../Question/Question";
import * as R from "ramda";

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];
const answers = questions.map(R.nth(0), questions);

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
                {<span>{props.numberOfCorrectAnswers} / {questions.length}</span>}
            </p>
        </div>
    )
};

class Questionnaire extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answers:[],
        }
    }

    selectOption(option){
        this.setState({
            answers : R.append(option, this.state.answers)
        })
    }

    render(){
        let correctAnswers = (R.zipWith(R.equals, answers, this.state.answers)).filter(x => x);

        return(
            <div>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>

                        <Route path="/next/:id" render={() => <Question arrayIndex={0} linkTo={"/next/:id"}
                                                                      questions={questions}
                                                                      onChange={(i) => this.selectOption(i)}/>}/>
                        <Route path="/next/:id" render={() => <Question arrayIndex={1} linkTo={"/next/:id"}
                                                                      questions={questions}
                                                                      onChange={(i) => this.selectOption(i)} />}/>
                        <Route path="/next/:id" render={() => <Question arrayIndex={2} linkTo={"/next/:id"}
                                                                      questions={questions}
                                                                      onChange={(i) => this.selectOption(i)} />}/>
                        <Route path="/next/:id" render={() => <ResultPage
                            numberOfCorrectAnswers={correctAnswers.length}/>}/>
                    </Switch>
            </div>
        )
    }

}
export {Questionnaire, questions};