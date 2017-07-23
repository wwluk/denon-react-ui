import React from 'react';
import {connect} from 'react-redux';
import Zones from "../model/Zones";
import {PowerIndicator} from "../components/PowerIndicator";
import {powerOnFactory} from "../actions/power";
import {powerOffFactory} from '../actions/power';

function mapStateToProps({[Zones.MAIN] : {power}}) {
    return {power}
}

export default connect(mapStateToProps, {
    powerOn: powerOnFactory(Zones.MAIN),
    powerOff: powerOffFactory(Zones.MAIN)
})(PowerIndicator);