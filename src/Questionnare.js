import React from 'react';

const firstOptions = ["first", "second", "third"];
const secondOptions = ["fourth", "fifth", "sixth"];
const seconsdOptions = ["fourth", "fifth", "sixth"];

const correctAnswer = ["first", "sixth"];

class Questionnare extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answers:[]
        }
    }

    selectOption(option){
        this.setState({
            answers : this.state.answers.concat([option])
        })
    }

    render(){
        return(
            <div>
                <div className="b-first">
                    <form action="">
                        <p>Select <b>only</b> one option</p>
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
                                   onChange={() => this.handleChanged(c)}
                            />{c}
                        </p>
                    )}
                </div>

                <div className="b-first">
                    <p>Select <b>several</b> options</p>
                    {seconsdOptions.map((c, i) =>
                        <p key={i}>
                            <input type={"radio"}
                                   name="b-first"
                                   key={i}
                                   value={c}
                                   onChange={()=>this.handleChanged(c)}
                            />{c}
                        </p>
                    )}
                </div>

                <div>
                    <p>Data output : </p>
                    <p>{
                       (this.state.answers[0] == correctAnswer[0] && this.state.answers[1] == correctAnswer[1])
                        ? <span> Correct answer</span>
                           :(this.state.answers[0] == correctAnswer[0] || this.state.answers[1] == correctAnswer[1])
                           ? <span>1 / 2</span>
                           : <span>0 / 2</span>
                    }
                    </p>
                </div>

            </div>
        )
    }
}
export default Questionnare;