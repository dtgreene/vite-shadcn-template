import { ErrorBoundary } from 'react-error-boundary';
import { useSnapshot } from 'valtio';

import { appState } from './state';
import { ErrorFallback } from '../ErrorFallback';

export const App = () => {
  const snap = useSnapshot(appState);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {snap.message}
    </ErrorBoundary>
  );
};
