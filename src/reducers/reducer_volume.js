export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_DATA_FULFILLED':
            var data = action.payload.data;
            return 80 + parseFloat(data.MasterVolume.value);

        case 'VOLUME_UP_PENDING':
            return state + 0.5;
        case 'VOLUME_DOWN_PENDING':
            return state - 0.5;
        case 'SET_VOLUME_PENDING':
            return action.payload;
    }
    return state;
}