import { combineReducers } from 'redux';
import VolumeReducer from './reducer_volume';
import InputReducer from './reducer_input';
import PowerReducer from './reducer_power';
import TunerFrequencyReducer from './reducer_tuner_frequency';

const rootReducer = combineReducers({
    volume: VolumeReducer,
    input: InputReducer,
    power: PowerReducer,
    tuner: combineReducers({
        frequency: TunerFrequencyReducer
    })
});

export default rootReducer;
