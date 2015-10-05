import React from 'react';
import { Router, RoutingContext } from 'react-router';
import routes from './routes';

export default class Root extends React.Component {

  static propTypes = {
    routerHistory: React.PropTypes.object,
    routingContext: React.PropTypes.object,
  }

  renderRoute() {
    if (this.props.routingContext) {
      return <RoutingContext {...this.props.routingContext} />;
    } else {
      return (
        <Router history={this.props.routerHistory}>
          {routes}
        </Router>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderRoute()}
      </div>
    );
  }
}
