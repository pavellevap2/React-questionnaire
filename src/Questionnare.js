import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const R = require("ramda");

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];

let nth = (i) => xs => xs[i];
let answers = questions.map(nth(0), questions);

let append = R.curry((xs, x) => xs.concat([x]));
let equals = (x1, x2) => x1 === x2;


let FirstQuestion = (props) => {
    return(
        <div className="b-first">
            <form action="">
                <p>Select <b>only</b> one option</p>
                {questions[0][1].map((c, i) =>
                    <p key={i}>
                        <input type="radio"
                               name="b-first"
                               key={i}
                               onChange={props.onChange}
                        />
                        <span>{c}</span>
                    </p>
                )}
            </form>
        </div>
    )
}

let SecondQuestion = (props) => {
    return(
        <div className="b-first">
            <form action="">
                <p>Select <b>only</b> one option</p>
                {questions[1][1].map((c, i) =>
                    <p key={i}>
                        <input type="radio"
                               name="b-first"
                               key={i}
                               onChange={props.onChange}
                        />
                        <span>{c}</span>
                    </p>
                )}
            </form>
        </div>
    )
}
let ThirdQuestion = (props) => {
    return(
        <div className="b-first">
            <form action="">
                <p>Select <b>only</b> one option</p>
                {questions[2][1].map((c, i) =>
                    <p key={i}>
                        <input type="radio"
                               name="b-first"
                               key={i}
                               onChange={props.onChange}
                        />
                        <span>{c}</span>
                    </p>
                )}
            </form>
        </div>
    )
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/1' component={<FirstQuestion/>}/>
            <Route path='/2' component={SecondQuestion}/>
            <Route path='/3' component={ThirdQuestion}/>
        </Switch>
    </main>
)

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
        let correctAnswers = ((R.zipWith(equals, answers, this.state.answers)).filter(x => x)).length;
        return(
            <Router>
               <div>
                    <div>
                        <Route/>
                    </div>
                        <button onClick={()=> this.toggleButton()}>See result</button>
                        {this.state.showResult
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
            </Router>
        )
    }

}
export default Questionnare;