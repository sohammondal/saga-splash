import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const middlewares = applyMiddleware(...[]);

const enhancers = [middlewares];

// add redux devtools extension
window.__REDUX_DEVTOOLS_EXTENSION__ &&
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, compose(...enhancers));

export const ReduxStoreProvider = (props) => (
    <Provider store={store}>{props.children}</Provider>
);
