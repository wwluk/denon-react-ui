import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, setVolume, volumeUp, volumeDown} from '../actions/index';

class VolumeIndicator extends Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
        this.setVolume = this.setVolume.bind(this);
    }

    setVolume(event) {
        this.props.setVolume(event.target.value);
    }

    render() {
        return (
            <div>
                <strong className="current-volume">{this.props.volume}</strong>
                <button onClick={() => this.props.setVolume(this.props.volume-2)}>--</button>
                <button onClick={this.props.volumeDown}>-</button>
                <input type="range" min="0" max="80" step="0.5" value={this.props.volume} onChange={this.setVolume}/>
                <button onClick={this.props.volumeUp}>+</button>
                <button onClick={() => this.props.setVolume(this.props.volume+2)}>++</button>
            </div>

        );
    }
}


function mapStateToProps({volume}) {
    return {volume}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchData, setVolume, volumeUp, volumeDown}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeIndicator);