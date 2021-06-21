import { all } from 'redux-saga/effects';

import imagesSaga from './images';
import statsSaga from './stats';

function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga()
    ])
}

export default rootSaga;
