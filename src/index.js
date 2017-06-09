import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import json from './timeline.json';
import './css/style.css';

ReactDOM.render(<App jsonObj={json} />, document.getElementById('root'));
registerServiceWorker();
