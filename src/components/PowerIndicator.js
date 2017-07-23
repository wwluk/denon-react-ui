import React, {Component} from "react";
import FontAwesome from 'react-fontawesome';

export class PowerIndicator extends Component {

    switchPower() {
        if (this.props.power === 'ON') {
            this.props.powerOff();
        } else {
            this.props.powerOn();
        }
    }

    render() {
        const powerClass = this.props.power === 'ON' ? 'on' : 'off';
        return (
            <div className="power-indicator">
                <button className={`btn btn-lg btn-outline-primary ${powerClass}`}
                        onClick={this.switchPower.bind(this)}>
                    <FontAwesome
                        name='power-off'
                        size='2x'
                    />
                </button>
            </div>
        );
    }
}