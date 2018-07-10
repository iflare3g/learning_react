import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookStore from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BookStore />, document.getElementById('root'));
registerServiceWorker();
