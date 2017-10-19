import { combineReducers } from 'redux';
import VolumeReducer from './reducer_volume';
import InputReducer from './reducer_input';
import PowerReducer from './reducer_power';
import TunerFrequencyReducer from './reducer_tuner_frequency';
import TunerPresetsReducer  from './reducer_tuner_presets';
import Zones from "../model/Zones";

const rootReducer = combineReducers({
    input: InputReducer,
    tuner: combineReducers({
        frequency: TunerFrequencyReducer,
        presets: TunerPresetsReducer
    }),
    [Zones.MAIN]: combineReducers({
        power: PowerReducer(Zones.MAIN),
        volume: VolumeReducer(Zones.MAIN)
    }),
    [Zones.ZONE2]: combineReducers({
        power: PowerReducer(Zones.ZONE2),
        volume: VolumeReducer(Zones.ZONE2)
    })
});

export default rootReducer;
