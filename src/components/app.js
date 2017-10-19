import React from 'react';
import { Component } from 'react';
import { MainZoneVolume, Zone2Volume } from '../containers/volume_indicator';
import { MainZoneSleepTimer, Zone2SleepTimer } from '../containers/SleepTimers'
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
                        <MainZoneSleepTimer/>
                        <div className="name">{Zones.MAIN}</div>
                    </div>
                    <div>
                        <Zone2PowerIndicator/>
                        <Zone2SleepTimer/>
                        <div className="name">{Zones.ZONE2}</div>
                    </div>
                </div>
                <MainZoneVolume/>
                <Zone2Volume/>
                <InputControls/>
                <Player/>
            </div>
        );
    }
}
