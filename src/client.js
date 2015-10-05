import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import createBrowserHistory from 'history/lib/createBrowserHistory';


ReactDOM.render(<Root routerHistory={createBrowserHistory()} />, document.getElementById('root'));
