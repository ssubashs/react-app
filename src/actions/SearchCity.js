import { SEARCH_CITY } from './ActionsConstants';

export function searchCity(term) {
    return {
        type: SEARCH_CITY,
        payload: search(term)
    }
}

function search(term) {
    const safeQuery = encodeURI(term);
    return fetch(`http://localhost:3000/https://www.metaweather.com/api/location/search/?query=${safeQuery}`)
        .then(a => {
            return a.json();
        })
}

