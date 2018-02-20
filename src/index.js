import React from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from "./Components/Questionnaire/Questionnare";
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Questionnaire/>
    </BrowserRouter>
    ,document.getElementById('root')
);