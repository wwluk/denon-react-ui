export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_TUNER_DATA_FULFILLED':
            var data = action.payload.data;
            return data.Frequency.value;
    }
    return state;
}
