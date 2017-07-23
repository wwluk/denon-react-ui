import {debouncedFetchData, invoke} from "./index";

function powerOn(zone) {
    return dispatch =>
            dispatch({
                type: `${zone}_POWER_ON`,
                payload: invoke('PutZone_OnOff/ON', zone)
            }).then(debouncedFetchData(dispatch))
}

export function powerOnFactory(zone) {
    return () => powerOn(zone)
}

function powerOff(zone) {
    return dispatch =>
            dispatch({
            type: `${zone}_POWER_OFF`,
            payload: invoke('PutZone_OnOff/OFF', zone)
        }).then(debouncedFetchData(dispatch))
}

export function powerOffFactory(zone) {
    return () => powerOff(zone)
}