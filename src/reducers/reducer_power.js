export default function(state = null, action) {
    switch(action.type) {
        case 'SWITCH_POWER':
        case 'FETCH_DATA':
            var data = action.payload.data;
            return data.Power.value;
    }
    return state;
}
