import React from 'react';
import ReactDOM from 'react-dom';

const WeatherDetail = ({ title, weatherInfo }) => {

    if (!title) {
        return <div>Search a city!</div>;
    }

    if (!weatherInfo) {
        return <div>Loading...</div>;
    };
    const weatherDetails = weatherInfo.map(forDay => {
        return <WeatherInfoForDay
            applicableDate={forDay.applicable_date}
            key={forDay.applicable_date}
            maxTemp={forDay.max_temp}
            minTemp={forDay.min_temp}>
        </WeatherInfoForDay>
    });

    return (
        <div>Weather detail for city {title}
            <ul>
                {weatherDetails}
            </ul>
        </div>
    );
}

const WeatherInfoForDay = ({ applicableDate, maxTemp, minTemp }) => {
    return (
        <li>
            {applicableDate} maximum temperate {maxTemp} min_temp {minTemp}
        </li>
    );
}

export default WeatherDetail;