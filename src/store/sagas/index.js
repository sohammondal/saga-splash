import { all } from 'redux-saga/effects';

import imagesSaga from './images';

function* rootSaga() {
    yield all([
        imagesSaga()
    ])
}

export default rootSaga;
