import React from 'react';
import Nav from './Nav';

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div className="container">
        <h1>POC Koa+React</h1>
        <Nav />
          {this.props.children}
      </div>
    );
  }
}
