import React from 'react';
import Title from './Title';
import Search from '../containers/Search';
//import { createStore, applyMiddleware } from 'redux';
//import { Router, browserHistory } from 'react-router';
//import promise from 'redux-promise';
import CityList from '../containers/CityList';
import WeatherInfo from '../containers/CityWeatherDetail';


//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Title titleName="React redux app" />
                <div className="row">
                    <Search />
                </div>
                <div className="row">
                    <div className="col-3">
                        <CityList />
                    </div>
                    <div className="col-8">
                        <WeatherInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default App