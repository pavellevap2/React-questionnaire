import React from 'react';
import ReactDOM from 'react-dom';
import Questionnare from "./Questionnare";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Questionnare/>, document.getElementById('root'));
registerServiceWorker();
