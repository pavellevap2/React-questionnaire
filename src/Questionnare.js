import React from 'react';
import _ from 'lodash';

let questions = [
    [1, ["foo", "bar"]],        // ответ "bar"
    [0, ["bar", "foo"]],        // ответ "bar"
    [2, ["foo", "bar", "baz"]], // ответ "baz"
];

let correctAnswers = questions.map(x => x.filter((_, i)=> i == 0)).reduce((z, x) => z.concat(x));

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
            answers : this.state.answers.concat([option])
        })
    }
    toggleButton(){
        this.setState({
            showResult : !this.state.showResult
        })
    }

    render(){
        let differenceLength = (_.difference(correctAnswers, this.state.answers)).length;
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
                                />{c}
                            </p>
                        )}
                    </form>
                </div>

                <div className="b-second">
                    <p>Select <b>only</b> one option</p>
                    {questions[1][1].map((c, i) =>
                        <p key={i}>
                            <input type={"radio"}
                                   name="b-first"
                                   key={i}
                                   onChange={() => this.selectOption(i)}
                            />{c}
                        </p>
                    )}
                </div>

                <div className="b-third">
                    <p>Select <b>only</b> one option</p>
                    {questions[2][1].map((c, i) =>
                        <p key={i}>
                            <input type={"radio"}
                                   name="b-first"
                                   key={i}
                                   onChange={() => this.selectOption(i)}
                            />{c}
                        </p>
                    )}
                </div>

                <div>
                    <button onClick={()=>this.toggleButton()}>See result</button>
                    {
                        this.state.showResult
                            ? <div>
                                <p>Correct options :
                                    {correctAnswers.length - differenceLength} /
                                    {correctAnswers.length}
                                </p>
                            </div>
                            : false
                    }
                </div>
            </div>
        )
    }
}
export default Questionnare;