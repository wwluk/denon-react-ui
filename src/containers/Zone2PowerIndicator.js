import {connect} from 'react-redux';
import Zones from "../model/Zones";
import {PowerIndicator} from "../components/PowerIndicator";
import {powerOnFactory} from "../actions/power";
import {powerOffFactory} from '../actions/power';

function mapStateToProps({[Zones.ZONE2] : {power}}) {
    return {power}
}

export default connect(mapStateToProps, {
    powerOn: powerOnFactory(Zones.ZONE2),
    powerOff: powerOffFactory(Zones.ZONE2)
})(PowerIndicator);