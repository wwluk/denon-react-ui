import React from 'react';
import { Component } from 'react';
import InputIndicator from '../containers/input_indicator';
import InputSelector from '../containers/input_selector';

export default class InputControls extends Component {
    render() {
        return (
            <div>
                <InputIndicator/>
                <InputSelector inputName="CD"/>
                <InputSelector inputName="AUX1"/>
                <InputSelector inputName="TUNER"/>
            </div>
        );
    }
}

