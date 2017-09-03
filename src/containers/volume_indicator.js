import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setVolume, volumeUp, volumeDown} from '../actions/index';
require('../../style/range.scss');

class VolumeIndicator extends Component {
    constructor(props) {
        super(props);
        this.setVolume = this.setVolume.bind(this);
    }

    setVolume(event) {
        this.props.setVolume(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={() => this.props.setVolume(this.props.volume - 2)}>--</button>
                        <button className="btn btn-secondary" onClick={this.props.volumeDown}>-</button>
                    </span>

                    <input type="text" className="form-control" disabled="disabled" value={this.props.volume}/>

                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.props.volumeUp}>+</button>
                        <button className="btn btn-secondary" onClick={() => this.props.setVolume(this.props.volume + 2)}>++</button>
                    </span>
                </div>
                <input type="range" min="0" max="80" step="0.5" value={this.props.volume} onChange={this.setVolume}/>
            </div>
        );
    }
}


function mapStateToProps({volume}) {
    return {volume}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setVolume, volumeUp, volumeDown}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeIndicator);