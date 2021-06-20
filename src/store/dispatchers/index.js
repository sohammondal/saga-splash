import { store } from '..';
import { loadImages } from '../actions';

const { dispatch } = store;

export const dispatchLoadImages = () => dispatch(loadImages());
