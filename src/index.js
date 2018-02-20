import React from 'react';
import ReactDOM from 'react-dom';
import Questionnare from "./Questionnare";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter ,Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Questionnare/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
