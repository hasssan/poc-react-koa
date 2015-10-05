import React from 'react';

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div className="container">
        <h1>POC Koa+React</h1>
          {this.props.children}
      </div>
    );
  }
}
