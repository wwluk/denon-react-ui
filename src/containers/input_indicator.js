import React, {Component} from 'react';
import {connect} from 'react-redux';

class InputIndicator extends Component {
    render() {
        return (
            <div>
                Current input: {this.props.input}
            </div>
        );
    }
}


function mapStateToProps({input}) {
    return {input}
}


export default connect(mapStateToProps)(InputIndicator);
