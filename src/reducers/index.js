import { combineReducers } from 'redux';
import SelectedCity from './selected_city';
import SearchCity from './search_city';

const rootReducer = combineReducers({
    selectedCity: SelectedCity,
    cities: SearchCity
});



export default rootReducer;