import { SEARCH_CITY } from '../actions/ActionsConstants'
export default function (state = [], action) {
    switch (action.type) {
        case SEARCH_CITY: {
            if (action.payload && action.payload.length > 0) {
                return action.payload.slice(0, 5);
            } else {
                return [];
            }
        }
    }

    return state;
}