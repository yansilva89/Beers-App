import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
    <App history={history} />,
    document.getElementById('root')
);
registerServiceWorker();