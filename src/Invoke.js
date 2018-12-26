import React, {Component} from 'react';
import './Invoke.css';

class Invoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceName: undefined,
      methodName: undefined,
      jsonInput: '{}',
    }
  }

  setData = (event, dataType) => {
    this.setState({
      [dataType]: event.target.value,
    })
  };

  invokeJob = () => {
    window.parent.postMessage(this.state, 'http://localhost:8080');
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="inputLabel">
            Service Name
          </div>
          <div className="input">
            <input
              type="text"
              value={this.state.serviceName}
              onChange={(event) => this.setData(event, 'serviceName')}
            />
          </div>
        </div>
        <div className="row">
          <div className="inputLabel">
            Method Name
          </div>
          <div className="input">
            <input
              type="text"
              value={this.state.methodName}
              onChange={(event) => this.setData(event, 'methodName')}
            />
          </div>
        </div>
        <div className="row">
          <div className="inputLabel">
            Json Input
          </div>
          <div className="input">
            <textarea
              placeholder="JSON format..."
              value={this.state.jsonInput}
              onChange={(event) => this.setData(event, 'jsonInput')}
            />
          </div>
        </div>
        <div className="rowButton">
            <button
              type="button"
              className="invokeButton"
              onClick={this.invokeJob}
            >
              Invoke
            </button>
        </div>
      </div>
    );
  }
}

export default Invoke;
