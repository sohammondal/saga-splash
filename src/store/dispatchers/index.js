import { store } from '..';
import { loadImages, setError } from '../actions';

const { dispatch } = store;

export const dispatchLoadImages = () => dispatch(loadImages());

export const dispatchSetError = (error) => dispatch(setError(error));
