export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_DATA_FULFILLED':
            var data = action.payload.data;
            return data.ZonePower.value;
        case 'POWER_ON_PENDING':
            return 'ON';
        case 'POWER_OFF_PENDING':
            return 'STANDBY';
    }
    return state;
}
