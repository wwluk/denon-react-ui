import { combineReducers } from 'redux';
import VolumeReducer from './reducer_volume';
import InputReducer from './reducer_input';
import PowerReducer from './reducer_power';

const rootReducer = combineReducers({
    volume: VolumeReducer,
    input: InputReducer,
    power: PowerReducer
});

export default rootReducer;
