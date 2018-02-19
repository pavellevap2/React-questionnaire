import React from 'react';
import _ from 'lodash';

const firstOptions = ["first", "second", "third"];
const secondOptions = ["fourth", "fifth", "sixth"];
const correctAnswer = ["first", "sixth"];

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
        let differenceLength = (_.difference(correctAnswer,this.state.answers)).length;

        return(
            <div>
                <div className="b-first">
                    <form action="">
                        <p>Select <b>only</b>b> one option</p>
                        {firstOptions.map((c, i) =>
                            <p key={i}>
                                <input type={"radio"}
                                       name="b-first"
                                       key={i}
                                       onChange={()=>this.selectOption(c)}
                                />{c}
                            </p>
                        )}
                    </form>

                </div>
                <div className="b-first">
                    <p>Select <b>only</b> one option</p>
                    {secondOptions.map((c, i) =>
                        <p key={i}>
                            <input type={"radio"}
                                   name="b-first"
                                   key={i}
                                   onChange={() => this.selectOption(c)}
                            />{c}
                        </p>
                    )}
                </div>

                <div className="b-first">
                    <p>Select <b>several</b> options</p>
                    {secondOptions.map((c, i) =>
                        <p key={i}>
                            <input type={"radio"}
                                   name="b-first"
                                   key={i}
                                   value={c}
                                   onChange={() => this.selectOption(c)}
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
                                    {correctAnswer.length - differenceLength} /
                                    {correctAnswer.length}
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