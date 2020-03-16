import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  
  componentDidCatch(error) {
    this.setState({
      error: error
    });
  }
  
  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong. Please try reloading.</h2>
        </div>
      );
    }
    return this.props.children;
  }  
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;
