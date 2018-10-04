import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../components/Loading';

const WeatherDetail = ({ title, weatherInfo }) => {

    //console.log(`[${title}] weather detail rendering..`);
    if (title == null) {
        return <div>Search a city!</div>;
    }

    if (weatherInfo == null || weatherInfo.length == 0) {
        //return <div className="loader"></div>
        return <Spinner />
    };

    let i = 1;
    const weatherDetails = weatherInfo.map(forDay => {
        return <WeatherInfoForDay
            index={i++}
            applicableDate={forDay.applicable_date}
            key={forDay.applicable_date}
            maxTemp={forDay.max_temp}
            minTemp={forDay.min_temp}>
        </WeatherInfoForDay>
    });

    return (
        <div>Weather detail for city {title}
            <table className="table-responsive-sm table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Max Temperature</th>
                        <th scope="col">Min Temperature</th>
                    </tr>
                </thead>

                <tbody>
                    {weatherDetails}
                </tbody>
            </table>
        </div>
    );
}

const WeatherInfoForDay = ({ index, applicableDate, maxTemp, minTemp }) => {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{applicableDate}</td>
            <td>{parseFloat(maxTemp).toFixed(2)}</td>
            <td>{parseFloat(minTemp).toFixed(2)}</td>
        </tr>
    );
}

export default WeatherDetail;