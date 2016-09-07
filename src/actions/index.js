import axios from 'axios';
import X2JS from 'x2js';
import _ from 'lodash';
export const ROOT_URL = 'http://localhost:1337/172.16.0.20';
const ROOT_PUT = `${ROOT_URL}/MainZone/index.put.asp`;
const URL = `${ROOT_URL}/goform/formMainZone_MainZoneXml.xml`;

function fetchStatus() {
    return axios.get(URL).then(denonXmlToJSON);
}

export function denonXmlToJSON(response) {
    response.data = new X2JS().xml2js(response.data).item;
    return response;
}

export function fetchData() {
    return {
        type: 'FETCH_DATA',
        payload: fetchStatus()
    }
}

var debouncedFetchData = _.debounce(function(dispatch) {
    return dispatch(fetchData());
},2000);

export function volumeUp() {
    return dispatch => dispatch(volumeBtn('>', 'VOLUME_UP')).then(debouncedFetchData(dispatch));
}
export function volumeDown() {
    return dispatch => dispatch(volumeBtn('<', 'VOLUME_DOWN')).then(debouncedFetchData(dispatch));
}

function volumeBtn(btn, type) {
    return {
        type: type,
        payload: invoke(`PutMasterVolumeBtn/${btn}`)
    }
}

export function setVolume(volume) {
    return dispatch => dispatch({
        type: 'SET_VOLUME',
        payload: {
            promise: invoke(`PutMasterVolumeSet/${(volume - 80)}`),
            data: volume
        }
    }).then(debouncedFetchData(dispatch))
}
export function selectInput(input) {
    return dispatch => dispatch({
        type: 'SELECT_INPUT',
        payload: {
            promise: invoke(`PutZone_InputFunction/${input}`),
            data: input
        }
    }).then(debouncedFetchData(dispatch))
}

export function powerOn() {
    return {
        type: 'SWITCH_POWER',
        payload: invoke('PutZone_OnOff/ON')
    }
}

export function powerOff() {
    return {
        type: 'SWITCH_POWER',
        payload: invoke('PutZone_OnOff/OFF')
    }
}



function invoke(actions) {
    return axios.get(buildUri(actions));
}

function buildUri(actions) {
    actions = _.isArray(actions) ? actions : [actions];

    const actionsWithIndices = _.zip(_.range(actions.length), actions);
    const uriParams = _.chain(actionsWithIndices)
        .map(a => `cmd${a[0]}=${a[1]}`)
        .join('&');
    return `${ROOT_PUT}?${uriParams}`;
}
