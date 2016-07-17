export default function(state = null, action) {
    switch(action.type) {
        case 'SWITCH_POWER_FULFILLED':
        case 'FETCH_DATA_FULFILLED':
            var data = action.payload.data;
            return data.Power.value;
    }
    return state;
}
