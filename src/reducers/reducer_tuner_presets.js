import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_TUNER_DATA_FULFILLED':
            var data = action.payload.data;
            const presets = data.PresetLists.value
                .map(transformPreset);
            return _.drop(presets);
    }
    return state;
}

function transformPreset(preset) {
    const nameAndFrequency = preset._param;
    const name = nameAndFrequency.substr(0, nameAndFrequency.length - 7);
    const frequency = nameAndFrequency.substr(nameAndFrequency.length - 6);
    return {
        index: preset._index,
        name: name,
        frequency: frequency
    }
}
