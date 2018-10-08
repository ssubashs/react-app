import React from 'react';
import Title from './Title';
import Search from '../containers/Search';
//import { createStore, applyMiddleware } from 'redux';
//import { Router, browserHistory } from 'react-router';
//import promise from 'redux-promise';
import CityList from '../containers/CityList';


//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Title titleName="React redux app" />
                <Search />
                <CityList />
            </div>
        );
    }
}

export default App