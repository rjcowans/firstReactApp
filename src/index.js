import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

ReactDOM.render(<Counters />, document.getElementById('root'));

// I switched to using the Counters componment, therefore the App.js and App.css are no longer needed.
// They will stay up for basic structure and new reliance

serviceWorker.unregister();