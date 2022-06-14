/* eslint-disable react/prop-types */
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const ErrorScreen = this.props.fallback || DefaultErrorScreen;
    if (this.state.errorInfo) {
      return (
        <ErrorScreen
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />
      );
    }
    return this.props.children;
  }
}

function DefaultErrorScreen({ error, errorInfo }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details>
    </div>
  );
}
