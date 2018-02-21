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

 class HomePage extends React.Component{
     render(){
         return (
             <div>
                 <h1>Srart make questionnaire</h1>
                 <ul>
                     <li><Link to={"/next/id/1"}>Next</Link></li>
                 </ul>
                 {this.props.children}
             </div>
         )
     }
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
                        <Route exact path="/" component={HomePage}/>

                        <Route path="/next/id/1" render={() => <Question arrayIndex={0} linkTo={"/next/id/2"}
                                                                        questions={questions}
                                                                        onChange={(i) => this.selectOption(i)}/>}/>
                        <Route path="/next/id/2" render={() => <Question arrayIndex={1} linkTo={"/next/id/3"}
                                                                        questions={questions}
                                                                        onChange={(i) => this.selectOption(i)} />}/>
                        <Route path="/next/id/3" render={() => <Question arrayIndex={2} linkTo={"/next/id/4"}
                                                                        questions={questions}
                                                                        onChange={(i) => this.selectOption(i)} />}/>
                        <Route path="/next/id/4" render={() => <ResultPage
                            numberOfCorrectAnswers={correctAnswers.length}/>}/>
            </div>
        )
    }

}
export {Questionnaire, questions};