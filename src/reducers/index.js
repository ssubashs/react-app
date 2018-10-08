import { combineReducers } from 'redux';
import Cities from './dummy_city_reducers';

const rootReducer = combineReducers({
    cities: Cities
});


export default rootReducer;