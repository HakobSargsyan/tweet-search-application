import React, { lazy, Suspense } from 'react';

const LazyConfirmationModal = lazy(() => import('./ConfirmationModal'));

const ConfirmationModal = props => (
  <Suspense fallback={null}>
    <LazyConfirmationModal {...props} />
  </Suspense>
);

export default ConfirmationModal;
