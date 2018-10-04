import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import LocationsItems from '../components/LocationItems';
import WeatherDetail from '../components/WeatherDetail';
import sleeper from '../js/util';
import './../css/custom.css';
import _ from "lodash";
const APPTitle = 'Weather app';
class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    metaWeatherLocation(term) {
        if (term !== undefined && term !== null && term.length > 0) {
            let safeQuery = encodeURI(term);
            return fetch(`http://localhost:3000/https://www.metaweather.com/api/location/search/?query=${safeQuery}`)
                .then(a => {
                    return a.json();
                })
                .then(response => {
                    if (response.length > 0) {
                        const defaultCity = response[0];
                        this.metaWeatherForCity(defaultCity.woeid, defaultCity.title);
                    }
                    this.setState({
                        locations: response
                    });
                    return response;
                })
        }

    }

    metaWeatherForCity(selectedCity, selectedCityTitle) {
        this.setState({
            selectedCity: [],
            selectedCityTitle: selectedCityTitle,
            weatherInfo: []
        });

        fetch(`http://localhost:3000/https://www.metaweather.com/api/location/${selectedCity}/`)
            .then(body => body.json())
            //.then(sleeper(2000))
            .then(response => {
                //console.log(response.consolidated_weather);
                this.setState({
                    selectedCity: selectedCity,
                    selectedCityTitle: selectedCityTitle
                });
                this.setState({
                    weatherInfo: response.consolidated_weather
                });
            });

    }


    render() {
        const locationSearch = _.debounce(term => {
            console.log('triggered location search.');
            this.metaWeatherLocation(term);
            console.log('location search successful.');
            // console.log(this.state.locations);
        }, 500);


        return (
            <div className="container"><Title titleName={654} />
                <div className="row">
                    <SearchBar onSearchTermChange={locationSearch} />
                </div>
                <div className="row">
                    <div className="col-3">
                        <LocationsItems
                            locations={this.state.locations}
                            selectedCity={this.state.selectedCity}
                            onSelect={(city, title) => this.metaWeatherForCity(city, title)} />
                    </div>
                    <div className="col-8">
                        <WeatherDetail
                            title={this.state.selectedCityTitle}
                            weatherInfo={this.state.weatherInfo} />
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <APP />,
    document.getElementById('app_container')
);