import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions/SelectCity';
import { bindActionCreators } from 'redux';


class CityList extends Component {
    render() {
        if (!this.props || !this.props.cities) {
            return <div>please search a city !!!</div>;
        }
        const cities = this.props.cities
            .map((city, index) => {
                if (index == 0) {
                    this.props.selectCity({ cityId: city.woeid, title: city.title })
                }
                const key_api = `${city.woeid}_${city.title}`;
                return (<Location
                    title={city.title}
                    city={city.woeid}
                    key={key_api}
                    props={this.props}
                />)
            });
        return (
            <div className="list-group">
                {cities}
            </div>
        );
    }
}



const Location = ({ city, title, props }) => {
    const baseCss = 'list-group-item list-group-item-action';
    return (
        <button
            type="button"
            className={baseCss}
            onClick={() => props.selectCity(
                { cityId: city, title: title })}>{title}</button>
    )
}

function mapStateToProps(state) {
    console.log(state.cities)
    return {
        cities: state.cities
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCity: selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);