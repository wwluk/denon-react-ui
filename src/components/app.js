import React from 'react';
import { Component } from 'react';
import VolumeIndicator from '../containers/volume_indicator';
import PowerIndicator from '../containers/power_indicator';
import InputControls from './input_controls';

export default class App extends Component {
    render() {
        return (
            <div>
                <PowerIndicator/>
                <VolumeIndicator/>
                <InputControls/>
            </div>
        );
    }
}
