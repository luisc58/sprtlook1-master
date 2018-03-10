import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

render( <Router />, document.querySelector("#root"));

registerServiceWorker();
