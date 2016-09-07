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
            </div>
        );
    }
}


function mapStateToProps({tuner}) {
    return {
        frequency: tuner.frequency
    };
}


export default connect(mapStateToProps, {fetchTunerData})(Tuner);
