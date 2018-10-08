import React, { Component } from "react";
import { connect } from "react-redux";


class Search extends Component {
    render() {
        return (
            <div className="input-field col s12">
                <input type="text"
                    id="autocomplete-input"
                    value={this.props.term}
                    className="autocomplete"
                />
            </div>
        );
    }



}



export default Search;