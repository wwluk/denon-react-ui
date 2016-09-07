import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tuner from './tuner';

class Player extends Component {
    render() {
        if(this.props.input == null) {
            return null;
        }
        switch(this.props.input.toLowerCase()) {
            case 'tuner':
                return <Tuner/>
            case 'aux1':
                return <div>AUX1!</div>;

        }
        return <div>Not supported!</div>;
    }
}


function mapStateToProps({input}) {
    return {input}
}


export default connect(mapStateToProps)(Player);
