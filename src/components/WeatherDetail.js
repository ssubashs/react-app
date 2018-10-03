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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Max Temperature</th>
                        <th scope="col">Min Temperature</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {weatherDetails}
            </tbody>
        </div>
    );
}

const WeatherInfoForDay = ({ applicableDate, maxTemp, minTemp }) => {
    let index = 1;
    return (
        <tr>
            <th scope="row">{index++}</th>
            <td>{applicableDate}</td>
            <td>{maxTemp}</td>
            <td>{minTemp}</td>
        </tr>
    );
}

export default WeatherDetail;