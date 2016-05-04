import React from 'react';
import { Component } from 'react';
import VolumeIndicator from '../containers/volume_indicator';

export default class App extends Component {
  render() {
    return (
      <div>
        <VolumeIndicator/>
      </div>
    );
  }
}
