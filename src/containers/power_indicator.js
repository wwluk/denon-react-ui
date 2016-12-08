import React, {Component} from 'react';
import {connect} from 'react-redux';
import {powerOn, powerOff} from '../actions/index';

class PowerIndicator extends Component {

    switchPower() {
        if (this.props.power == 'ON') {
            this.props.powerOff();
        } else {
            this.props.powerOn();
        }
    }

    render() {
        const powerClass = this.props.power == 'ON' ? 'on' : 'off';
        return (
            <div className="power-indicator">
                <button className={`btn btn-lg btn-outline-primary ${powerClass}`} onClick={this.switchPower.bind(this)}>{this.props.power}</button>
            </div>
        );
    }
}


function mapStateToProps({power}) {
    return {power}
}

export default connect(mapStateToProps, {powerOn, powerOff})(PowerIndicator);