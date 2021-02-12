import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/root';

//CSS
//import './assets/scss/boostrap/bootstrap.css';
//import './assets/scss/itrade.css';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();