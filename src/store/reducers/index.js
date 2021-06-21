import { combineReducers } from 'redux';

import error from './error';
import stats from './stats';
import images from './images';
import nextPage from './page';
import isLoading from './loading';

const rootReducer = combineReducers({
    error,
    stats,
    images,
    nextPage,
    isLoading,
});

export default rootReducer;
