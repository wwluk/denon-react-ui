import axios from 'axios';
import X2JS from 'x2js';
import _ from 'lodash';
const ROOT_URL = 'http://localhost:1337/172.16.0.20';
const ROOT_PUT = `${ROOT_URL}/MainZone/index.put.asp`;
const URL = `${ROOT_URL}/goform/formMainZone_MainZoneXml.xml`;

function fetchStatus() {
    return axios.get(URL)
        .then(res => {
            res.data = new X2JS().xml2js(res.data).item;
            return res;
        });
}

export function fetchData() {
    return {
        type: 'FETCH_DATA',
        payload: fetchStatus()
    }
}

function volumeBtn(btn) {
    const request = axios.get(buildUri(`PutMasterVolumeBtn/${btn}`))
        .then(fetchStatus);

    return {
        type: 'SET_VOLUME',
        payload: request
    }
}
export function volumeUp() {
    return volumeBtn('>');
}

export function volumeDown() {
    return volumeBtn('<');
}

export function setVolume(volume) {
    const vol = volume - 80;
    const request = axios.get(buildUri(`PutMasterVolumeSet/${vol}`))
    .then(fetchStatus);

    return {
        type: 'SET_VOLUME',
        payload: request
    }
}
export function selectInput(input) {
    const request = axios.get(buildUri(`PutZone_InputFunction/${input}`))
        .then(fetchStatus);

    return {
        type: 'SELECT_INPUT',
        payload: request
    }
}

function buildUri(actions) {
    actions = _.isArray(actions) ? actions : [actions];
    actions.push('aspMainZone_WebUpdateStatus/');

    const actionsWithIndices = _.zip(_.range(actions.length), actions);
    const uriParams = _.chain(actionsWithIndices)
        .map(a => `cmd${a[0]}=${a[1]}`)
        .join('&');
    return `${ROOT_PUT}?${uriParams}`;
}
