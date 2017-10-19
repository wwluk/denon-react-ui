import React, {Component} from 'react';

export default class SleepTimer extends Component {
    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon">Sleep</span>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={() => this.props.sleepOff()}>off</button>
                    <button className="btn btn-secondary" onClick={() => this.props.sleep(15)}>15m</button>
                    <button className="btn btn-secondary" onClick={() => this.props.sleep(30)}>30m</button>
                    <button className="btn btn-secondary" onClick={() => this.props.sleep(60)}>1h</button>
                </span>
            </div>
        );
    }

}