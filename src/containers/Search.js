import React, { Component } from "react";
import { connect } from "react-redux";
import { searchCity } from '../actions/SearchCity';
import { bindActionCreators } from 'redux';
import _ from "lodash";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { term: "" };
        this.onInputChange = this.onInputChange.bind(this);
    }


    render() {
        return (
            <div className="input-field col s12">
                <input type="text"
                    id="autocomplete-input"
                    value={this.state.term}
                    className="autocomplete"
                    onChange={this.onInputChange}
                />
            </div>
        );
    }

    onInputChange(event) {
        const term = event.target.value == null ? '' : event.target.value;
        console.log(event.target.value);
        this.setState({ term });
        if (term !== '') {
            locationSearch(this.props.searchCity)(term);
        }
    }

}

const locationSearch = (apicall => _.debounce(term => {
    console.log('triggered location search.');
    apicall(term);
}, 500));


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchCity: searchCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
