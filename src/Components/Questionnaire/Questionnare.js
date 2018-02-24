import React from "react";
import { Route, Link, Switch} from "react-router-dom";
import "./Questionnare.css"
import * as R from "ramda";

import Question from "../Question/Question";
import HomePage from "../StaticPages/HomePage";
import ResultPage from "../StaticPages/ResultPage";

const questions = [
    "Что такое React JS?",
    "Что делает setState?",
    "Что такое элемент?",
    "В каком случае нужно использовать класс?",
    "Что такое refs?",
    "Что такое компонент?",
    "Зачем нужен артибут key?",
    "В чем разница между контролируемым и неконтролируемым компонентом?",
    "В чём польза использования PropTypes ?",
    "В какой стадии жизненого цикла компонента лучше всего использовать Ajax запросы? ",
    "Зачем нужен componentWillMount?",
];

const options = [
    [1, ["foo", "bar"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
    [2, ["foo", "bar", "baz"]],
];
const correctOptions = options.map(R.nth(0), options); //правильные ответы

class Questionnaire extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userAnswers:[], //ответы пользователя
        }
    }

    selectOption(option){
        this.setState({
            userAnswers : R.append(option, this.state.userAnswers)
        })
    }

    render(){
        let UserCorrectAnswers = (R.zipWith(R.equals, correctOptions, this.state.userAnswers)).filter(x => x);

        let renderQuestions = ({match}) => {
            let nextURL = (match.params.page == options.length - 1) ?  "/results"
                : `/next/${Number(match.params.page) + 1}/`;

            return <Question question={match.params.page} optionNumber={match.params.page}
                                       onChange={(i) => this.selectOption(i)} nextURL={nextURL} />
        };

        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/next/:page/" render={renderQuestions}/>
                    <Route path="/results" render={()=> <ResultPage optionsLength={options.length}
                        numberOfCorrectAnswers={UserCorrectAnswers.length}/>}
                    />
                </Switch>
            </div>
        )
    }

}
export {Questionnaire, options, questions};