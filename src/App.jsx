import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      counter: 0,
    };
  },
  onClick() {
    const counter = this.state.counter + 1;
    this.setState({counter: counter});
  },
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <button type="button" onClick={this.onClick} className="btn btn-default">
            Counter {this.state.counter}
          </button>
        </div>
      </div>
    );
  },
});

export default App;
