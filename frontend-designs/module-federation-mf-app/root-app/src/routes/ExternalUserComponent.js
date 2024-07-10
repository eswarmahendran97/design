import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work

const ExternalUserApp = lazy(() => import('ExternalMf/ExternalUser'));

function ExternalUserComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <ExternalUserApp />
      </Suspense>

    </div>
  );
}

export default ExternalUserComponent;