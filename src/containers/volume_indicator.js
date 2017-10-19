import React from 'react';
import {connect} from 'react-redux';
import {setVolume, volumeUp, volumeDown} from '../actions/index';
import VolumeIndicator from "../components/VolumeIndicator";
import Zones from "../model/Zones";

function mapStateToProps({[Zones.MAIN] : {volume}}) {
    return {volume}
}

module.exports = {
    MainZoneVolume : connect(mapStateToProps, {
        setVolume: (volume) => setVolume(volume, Zones.MAIN),
        volumeUp: () => volumeUp(Zones.MAIN),
        volumeDown: () => volumeDown(Zones.MAIN)
    })(VolumeIndicator),

    Zone2Volume: connect((state) => ({
        volume: state[[Zones.ZONE2]].volume
    }), {
        setVolume: (volume) => setVolume(volume, Zones.ZONE2),
        volumeUp: () => volumeUp(Zones.ZONE2),
        volumeDown: () => volumeDown(Zones.ZONE2)
    })(VolumeIndicator)
};