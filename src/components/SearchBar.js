import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


// @flow
type Props = { term: string };

type State = {
    term: string,
};

//class based components have state. 
class SearchBar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className="input-field col s12">
                <input type="text"
                    id="autocomplete-input"
                    value={this.state.term}
                    className="autocomplete"
                    onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(event) {
        const term = event.target.value;
        // console.log(`input value is ${term}`);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }




}


export default SearchBar;