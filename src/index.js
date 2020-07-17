import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppOriginal from './AppOriginal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < AppOriginal/ > , document.getElementById('root'));
registerServiceWorker();