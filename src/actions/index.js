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

export function volumeUp() {
    return volumeBtn('>');
}
export function volumeDown() {
    return volumeBtn('<');
}

function volumeBtn(btn) {
    return {
        type: 'SET_VOLUME',
        payload: invoke(`PutMasterVolumeBtn/${btn}`)
    }
}

export function setVolume(volume) {
    const vol = volume - 80;
    return {
        type: 'SET_VOLUME',
        payload: invoke(`PutMasterVolumeSet/${vol}`)
    }
}
export function selectInput(input) {
    return {
        type: 'SELECT_INPUT',
        payload: invoke(`PutZone_InputFunction/${input}`)
    }
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
    return axios.get(buildUri(actions))
        .then(fetchStatus)
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
