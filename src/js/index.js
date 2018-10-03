import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import LocationsFromSearch from '../components/LocationItems';

class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    metaWeatherLocation(term) {
        if (term !== undefined && term !== null && term.length > 0) {
            return fetch(`http://localhost:3000/https://www.metaweather.com/api/location/search/?query=${term}`)
                .then(a => {
                    return a.json();
                })
                .then(response => {
                    console.log(response);
                    this.setState({
                        locations: response
                    });
                    return response;
                })
        }

    }


    render() {
        const locationSearch = _.debounce(term => {
            console.log('triggered api call');
            this.metaWeatherLocation(term);
            console.log('api call successful. ..');
            console.log('state ' + this.state.locations);
            console.log(this.state);
        }, 500);
        return (
            <div><Title />
                <SearchBar onSearchTermChange={locationSearch} />
                <LocationsFromSearch locations={this.state.locations} />
            </div>

        );
    }
}

ReactDOM.render(
    <APP />,
    document.getElementById('app_container')
);