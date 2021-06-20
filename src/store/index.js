import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(...[sagaMiddleware]);

const enhancers = [middlewares];
// add redux devtools extension
window.__REDUX_DEVTOOLS_EXTENSION__ &&
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, compose(...enhancers));

sagaMiddleware.run(sagas)

export const ReduxStoreProvider = (props) => (
    <Provider store={store}>{props.children}</Provider>
);
