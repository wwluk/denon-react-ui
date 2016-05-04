export default function(state = null, action) {
    switch(action.type) {
        case 'SELECT_INPUT':
        case 'FETCH_DATA':
            var data = action.payload.data;
            return data.InputFuncSelect.value;
    }
    return state;
}
