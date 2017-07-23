import axios from 'axios';
import X2JS from 'x2js';
import _ from 'lodash';
import Zones from "../model/Zones";

export const ROOT_URL = '/api';
const ROOT_PUT = `${ROOT_URL}/MainZone/index.put.asp`;
const STATUS_URL = `${ROOT_URL}/goform/formMainZone_MainZoneXml.xml`;
const zoneStatusUrl = zone => `${STATUS_URL}?ZoneName=${zone}`;

function fetchStatus(zone) {
    return axios.get(zoneStatusUrl(zone)).then(denonXmlToJSON);
}

export function denonXmlToJSON(response) {
    response.data = new X2JS().xml2js(response.data).item;
    return response;
}

export function fetchData() {
    return dispatch => {
        //TODO should be removed after migrating all data to zone based Redux structure
        const mainZoneStatus = fetchStatus(Zones.MAIN);
        dispatch({
            type: `FETCH_DATA`,
            payload: mainZoneStatus
        });
        dispatch({
            type: `${Zones.MAIN}_FETCH_DATA`,
            payload: mainZoneStatus
        });
        dispatch({
            type: `${Zones.ZONE2}_FETCH_DATA`,
            payload: fetchStatus(Zones.ZONE2)
        });
    }
}

export const debouncedFetchData = _.debounce(function(dispatch) {
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

export function invoke(actions, zone = Zones.MAIN) {
    return axios.get(buildUri(actions, zone));
}

function buildUri(actions, zone) {
    actions = _.isArray(actions) ? actions : [actions];

    const actionsWithIndices = _.zip(_.range(actions.length), actions);
    const uriParams = _.chain(actionsWithIndices)
        .map(a => `cmd${a[0]}=${a[1]}`)
        .join('&');
    return `${ROOT_PUT}?ZoneName=${zone}&${uriParams}`;
}
