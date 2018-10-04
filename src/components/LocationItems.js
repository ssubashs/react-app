import React from 'react';
import ReactDOM from 'react-dom';

const LocationsItems = props => {
    const selectedCity = props.selectedCity;
    const cities = props.locations.slice(0, 10)
        .map(city => {
            // console.log(`city is ${city.title} with id ${city.woeid}`)
            const key_api = `${city.woeid}_${city.title}`;
            return (<Location title={city.title} city={city.woeid} key={key_api} lat_long={city.lat_long} isSelected={city.woeid === selectedCity} onSelect={props.onSelect} />)
        });
    return (
        <div className="list-group">
            {cities}
        </div>
    );
};

const Location = ({ city, title, lat_long, isSelected, onSelect }) => {
    const baseCss = 'list-group-item list-group-item-action'
    const listcssclass = isSelected ? `${baseCss} btn-info active` : baseCss;
    return (

        <button type="button" className={listcssclass} onClick={() => onSelect(city, title)}>{title}</button>

    )
}

/*
onInputChange(event) {
    console.log(`input value is ${event.target.value}`);
    this.setState({ term: event.target.value });
}
*/

export default LocationsItems;