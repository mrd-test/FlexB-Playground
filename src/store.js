import { createStore, combineReducers } from 'redux';
import reducerNavbar from './slices/reducerNavbar';
import reducerItems from './slices/reducerItems';
import reducerContainer from './slices/reducerContainer';

const combine = combineReducers({
    items: reducerItems,
    container: reducerContainer,
    navbar: reducerNavbar
});

const store = createStore(combine);

export default store;