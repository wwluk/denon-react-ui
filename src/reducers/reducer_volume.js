export default zone =>
    function(state = '', action) {
        switch(action.type) {
            case `${zone}_FETCH_DATA_FULFILLED`:
                var data = action.payload.data;
                return 80 + parseFloat(data.MasterVolume.value);
            case `${zone}_VOLUME_UP_PENDING`:
                return state + 0.5;
            case `${zone}_VOLUME_DOWN_PENDING`:
                return state - 0.5;
            case `${zone}_SET_VOLUME_PENDING`:
                return action.payload;
        }
        return state;
    }