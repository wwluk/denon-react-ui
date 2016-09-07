import axios from 'axios';
import {ROOT_URL, denonXmlToJSON} from "./index";
const URL = `${ROOT_URL}/goform/formTuner_TunerXml.xml`;

function fetchTunerStatus() {
    return axios.get(URL).then(denonXmlToJSON);
}

export function fetchTunerData() {
    return {
        type: 'FETCH_TUNER_DATA',
        payload: fetchTunerStatus()
    }
}