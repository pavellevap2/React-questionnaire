import React from "react";
import { Route, Link, Switch} from "react-router-dom";
import  Questions from "../Questions/Question";
import * as R from "ramda";

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];
const answers = questions.map(R.nth(0), questions);

const HomePage = () => {
    return(
        <div>
            <h1>Srart make questionnaire</h1>
            <p><Link to={"/next/0/"}>Next</Link></p>
        </div>
    )
};

let ResultPage = (props) => {
    return(
            <div>
                <p>Result :
                    {<span> {props.numberOfCorrectAnswers} / {questions.length} </span>}
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

        let renderQuestions = ({match}) => {
            let nextURL = (match.params.page == questions.length - 1) ?  "/results"
                : `/next/${Number(match.params.page) + 1}/`;

            return <Questions nextURL={nextURL} questionNumber={match.params.page}
                              onChange={(i) => this.selectOption(i)}/>
        };

        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/next/:page/" render={renderQuestions}/>
                    <Route path="/results" render={()=> <ResultPage numberOfCorrectAnswers={correctAnswers.length}/>}
                    />
                </Switch>
            </div>
        )
    }

}
export {Questionnaire, questions};