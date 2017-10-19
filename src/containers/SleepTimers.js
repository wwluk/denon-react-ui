import React from 'react';
import {connect} from 'react-redux';
import SleepTimer from "../components/SleepTimer";
import Zones from "../model/Zones";
import {invoke} from "../actions/index";

function sleep(minutes, zone) {
    invoke(`PutSleepTimer/0${minutes}`, zone);
}

function sleepOff(zone) {
    invoke('PutSleepTimer/OFF', zone);
}

module.exports = {
    MainZoneSleepTimer : connect(null, {
        sleepOff: () => sleepOff(Zones.MAIN),
        sleep: (minutes) => sleep(minutes, Zones.MAIN)
    })(SleepTimer),

    Zone2SleepTimer: connect(null, {
        sleepOff: () => sleepOff(Zones.ZONE2),
        sleep: (minutes) => sleep(minutes, Zones.ZONE2)
    })(SleepTimer)
};
