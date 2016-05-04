import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectInput} from '../actions/index';

class InputSelector extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.selectInput(this.props.inputName);
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.inputName}</button>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectInput}, dispatch);
}

export default connect(null, mapDispatchToProps)(InputSelector);
