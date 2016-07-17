export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_DATA_FULFILLED':
            var data = action.payload.data;
            return data.InputFuncSelect.value;
        case 'SELECT_INPUT_PENDING':
            return action.payload;
    }
    return state;
}
