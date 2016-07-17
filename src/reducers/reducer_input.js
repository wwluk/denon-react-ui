export default function(state = null, action) {
    switch(action.type) {
        case 'SELECT_INPUT_FULFILLED':
        case 'FETCH_DATA_FULFILLED':
            var data = action.payload.data;
            return data.InputFuncSelect.value;
    }
    return state;
}
