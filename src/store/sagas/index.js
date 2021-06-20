import { call, put, select, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { selectPage } from '../selectors';

import { unsplash } from '../../apis';
import { setError, setImages } from '../actions';

function* handleLoadImages() {
    try {
        const page = yield select(selectPage);
        const images = yield call(unsplash.getPhotos, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleLoadImages);
}

export default rootSaga;
