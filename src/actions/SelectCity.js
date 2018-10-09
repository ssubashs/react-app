import { SELECT_CITY } from './ActionsConstants';

export function selectCity(city) {
    return {
        type: SELECT_CITY,
        payload: getWeather(city)
    }
}

function getWeather(city) {
    console.log(city);
    return fetch(`http://localhost:3000/https://www.metaweather.com/api/location/${city.cityId}/`)
        .then(body => body.json())
        .then(response => {
            return {
                title: city.title,
                info: response.consolidated_weather,
                isLoading: false
            };
        })
        .then(rp => {
            return rp;
        })
} 