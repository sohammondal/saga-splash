import React from 'react';
import ReactDOM from 'react-dom';

import App from './components';
import { ReduxStoreProvider } from './store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <ReduxStoreProvider>
        <App />
    </ReduxStoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
