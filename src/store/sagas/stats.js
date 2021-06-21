import { fork, take } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImageStats(id) {
    console.log('fetching stats for image', id);
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
