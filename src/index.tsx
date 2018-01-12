import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/';

// if (process.env.NODE_ENV === 'production') {
//     const runtime = require('offline-plugin/runtime');
//     runtime.install({
//         onUpdateReady() {
//             runtime.applyUpdate();
//         },
//         onUpdated() {
//             window.location.reload();
//         },
//     });
// }

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <App />
    </Router>,
    document.getElementById('root')
);