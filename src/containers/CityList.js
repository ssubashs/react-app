import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
    render() {
        if (!this.props || !this.props.cities) {
            return <div>please search a city !!!</div>;
        }
        const cities = this.props.cities
            .map(city => {
                const key_api = `${city.woeid}_${city.title}`;
                return (<Location title={city.title} city={city.woeid} key={key_api} />)
            });
        return (
            <div className="list-group">
                {cities}
            </div>
        );
    }
}



const Location = ({ city, title }) => {
    const baseCss = 'list-group-item list-group-item-action';
    return (
        <button type="button" className={baseCss}>{title}</button>
    )
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    };
}

export default connect(mapStateToProps)(CityList);