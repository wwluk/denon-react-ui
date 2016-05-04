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
    const request = axios.get(`${ROOT_PUT}?cmd0=PutMasterVolumeBtn/${btn}&cmd1=aspMainZone_WebUpdateStatus/`)
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
    const request = axios.get(`${ROOT_PUT}?cmd0=PutMasterVolumeSet/${vol}&cmd1=aspMainZone_WebUpdateStatus/`)
    .then(fetchStatus);

    return {
        type: 'SET_VOLUME',
        payload: request
    }
}

export function selectInput(input) {
    const request = axios.get(`${ROOT_PUT}?cmd0=PutZone_InputFunction/${input}&cmd1=aspMainZone_WebUpdateStatus/`)
        .then(fetchStatus);

    return {
        type: 'SELECT_INPUT',
        payload: request
    }
}