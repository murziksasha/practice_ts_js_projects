import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Error } from '../Error/Error';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return (
        <div>
          <Error/>
          <h1>Something went wrong!</h1>
          <p>{this.state.error?.toString()}</p>
          <div>Error stack trace:</div>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;