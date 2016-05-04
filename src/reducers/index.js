import { combineReducers } from 'redux';
import VolumeReducer from './reducer_volume';
import InputReducer from './reducer_input';

const rootReducer = combineReducers({
    volume: VolumeReducer,
    input: InputReducer
});

export default rootReducer;
