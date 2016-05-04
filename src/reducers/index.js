import { combineReducers } from 'redux';
import VolumeReducer from './reducer_volume';

const rootReducer = combineReducers({
    volume: VolumeReducer
});

export default rootReducer;
