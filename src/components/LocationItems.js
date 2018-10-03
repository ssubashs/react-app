import React from 'react';
import ReactDOM from 'react-dom';

/*
class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(props) {
        console.log(props);
        return (
            <div>
                <h3>locations </h3>
            </div>
        );
    }



}
*/

const Locations = props => {
    const cities = props.locations.slice(0, 5)
        .map(city => {
            console.log(`city is ${city.title} with id ${city.woeid}`)
            return (<Location city={city.title} key={city.woeid} lat_long={city.latt_long} />)
        });
    return (
        <ul className="col-md-4 list-group">
            {cities}
        </ul>
    );
};

const Location = ({ city, lat_long }) => {
    return (

        <li>{city}</li>

    )
}

/*
onInputChange(event) {
    console.log(`input value is ${event.target.value}`);
    this.setState({ term: event.target.value });
}
*/

export default Locations;