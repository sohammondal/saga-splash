import { call, fork, put, take } from 'redux-saga/effects';
import { unsplash } from '../../apis';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';
import { IMAGES } from '../constants';

const RETRIALS = 3;

function* handleImageStats(id) {
    for (let i = 0; i < RETRIALS; i++) {
        try {
            yield put(loadImageStats(id))
            const { downloads } = yield call(unsplash.getPhotoStats, id)
            yield put(setImageStats(id, downloads?.total))
            return true
        } catch (error) {}
    }

    yield put(setImageStatsError(id))
}

function* statsSaga() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleImageStats, images[i].id);
        }
    }
}

export default statsSaga;
