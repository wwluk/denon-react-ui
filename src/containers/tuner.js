import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTunerData} from '../actions/tuner';

class Tuner extends Component {
    componentWillMount() {
        this.props.fetchTunerData();
    }

    render() {
        return (
            <div>
                Tuner: {this.props.frequency}
                <ul>
                    {this.props.presets.map(preset => <li>{preset.name} - {preset.frequency}</li>)}
                </ul>
            </div>

        );
    }
}


function mapStateToProps({tuner}) {
    return {
        frequency: tuner.frequency,
        presets: tuner.presets
    };
}


export default connect(mapStateToProps, {fetchTunerData})(Tuner);
