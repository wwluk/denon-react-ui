import React from 'react';
import { Component } from 'react';
import VolumeIndicator from '../containers/volume_indicator';
import InputControls from './input_controls';
import Player from '../containers/player';
import MainZonePowerIndicator from '../containers/MainZonePowerIndicator';
import Zone2PowerIndicator from "../containers/Zone2PowerIndicator";
import Zones from "../model/Zones";

require('../../style/style.scss');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }
    render() {
        return (
            <div>
                <div className="power-indicators">
                    <div>
                        <MainZonePowerIndicator/>
                        <div className="name">{Zones.MAIN}</div>
                    </div>
                    <div>
                        <Zone2PowerIndicator/>
                        <div className="name">{Zones.ZONE2}</div>
                    </div>
                </div>
                <VolumeIndicator/>
                <InputControls/>
                <Player/>
            </div>
        );
    }
}
