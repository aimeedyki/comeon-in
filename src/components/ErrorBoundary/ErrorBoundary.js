import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
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
