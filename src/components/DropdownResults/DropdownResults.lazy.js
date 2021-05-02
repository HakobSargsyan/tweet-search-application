import React, { lazy, Suspense } from 'react';

const LazyDropdownResults = lazy(() => import('./DropdownResults'));

const DropdownResults = props => (
  <Suspense fallback={null}>
    <LazyDropdownResults {...props} />
  </Suspense>
);

export default DropdownResults;
