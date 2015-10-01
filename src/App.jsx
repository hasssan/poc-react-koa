import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      counter: 0
    };
  },
  onClick() {
    const counter = this.state.counter + 1;
    this.setState({counter: counter})
  },
  render() {
    return (
      <div className="container">
        <h1>React Apps</h1>
        <div className="row">
          <div className="col-sm-12">
            <h1>{this.state.counter}</h1>
            <button type="button" onClick={this.onClick} className="btn btn-default">
              Counter
            </button>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
