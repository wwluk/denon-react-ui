export default zone =>
    function(state = null, action) {
        switch(action.type) {
            case `${zone}_FETCH_DATA_FULFILLED`:
                const data = action.payload.data;
                return data.ZonePower.value;
            case `${zone}_POWER_ON_PENDING`:
                return 'ON';
            case `${zone}_POWER_OFF_PENDING`:
                return 'STANDBY';
        }
        return state;
    };
