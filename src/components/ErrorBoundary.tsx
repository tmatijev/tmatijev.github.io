import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Surfaced in dev; stripped from production build by terser.
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-ink-950">
          <div className="text-center">
            <p className="mono-label mb-4">// runtime_error</p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Something broke.
            </h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              An unexpected error occurred. A refresh usually sorts it out.
            </p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
