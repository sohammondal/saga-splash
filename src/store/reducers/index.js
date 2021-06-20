import { combineReducers } from 'redux';

import error from './error';
import images from './images';
import nextPage from './page';
import isLoading from './loading';

const rootReducer = combineReducers({
    error,
    images,
    nextPage,
    isLoading,
});

export default rootReducer;
