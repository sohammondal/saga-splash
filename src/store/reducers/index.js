import { combineReducers } from 'redux';

import isLoading from './loading';
import images from './images';
import error from './error';

const rootReducer = combineReducers({
    isLoading,
    images,
    error,
});

export default rootReducer;