import React from 'react';
import ReactDOM from 'react-dom';

const LocationsItems = props => {
    const cities = props.locations.slice(0, 5)
        .map(city => {
            console.log(`city is ${city.title} with id ${city.woeid}`)
            return (<Location title={city.title} city={city.woeid} key={city.woeid} lat_long={city.lat_long} onSelect={props.onSelect} />)
        });
    return (
        <ul className="col-md-4 list-group">
            {cities}
        </ul>
    );
};

const Location = ({ city, title, lat_long, onSelect }) => {
    return (

        <li onClick={() => onSelect(city, title)}>{title}</li>

    )
}

/*
onInputChange(event) {
    console.log(`input value is ${event.target.value}`);
    this.setState({ term: event.target.value });
}
*/

export default LocationsItems;