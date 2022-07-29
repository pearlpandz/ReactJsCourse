import React, { Component } from 'react';

class ErrorBoundary extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
        hasError: false,
        };
    }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });

  }
  render() {
    if (this.state.hasError) {
      return (
            
            <p>product not available now.</p>
        
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
