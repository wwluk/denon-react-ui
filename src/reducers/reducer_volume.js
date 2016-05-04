export default function(state = null, action) {
    switch(action.type) {
        case 'SET_VOLUME':
        case 'FETCH_DATA':
            var data = action.payload.data;
            return 80 + parseFloat(data.MasterVolume.value);
    }
    return state;
}