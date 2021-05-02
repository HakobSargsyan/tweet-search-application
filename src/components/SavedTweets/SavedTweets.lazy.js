import React, { lazy, Suspense } from 'react';

const LazySavedTweets = lazy(() => import('./SavedTweets'));

const SavedTweets = props => (
  <Suspense fallback={null}>
    <LazySavedTweets {...props} />
  </Suspense>
);

export default SavedTweets;
