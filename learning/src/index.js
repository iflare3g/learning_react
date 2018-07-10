import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './forms/Input'
import App from './forms/First_form';
import registerServiceWorker from './registerServiceWorker';

const app = ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
