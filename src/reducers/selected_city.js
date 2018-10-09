import { SELECT_CITY } from '../actions/ActionsConstants'
export default function (state = null, action) {
    switch (action.type) {
        case SELECT_CITY: {
            console.log(action.payload);
            return action.payload;
        }
    }

    return state;
}