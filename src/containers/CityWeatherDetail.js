import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Loading';

class WeatherInfo extends Component {
    render() {
        console.log(this.props.selectedCity)
        if (!this.props.selectedCity) {
            return <div></div>;
        }
        let i = 1;
        const weatherDetails = this.props.selectedCity.info.map(forDay => {
            return <WeatherInfoForDay
                index={i++}
                applicableDate={forDay.applicable_date}
                key={forDay.applicable_date}
                maxTemp={forDay.max_temp}
                minTemp={forDay.min_temp}>
            </WeatherInfoForDay>
        });

        return (
            <div>
                Weather detail for {this.props.selectedCity.title}
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

function mapStateToProps(state) {
    return {
        selectedCity: state.selectedCity
    };
}

export default connect(mapStateToProps)(WeatherInfo);