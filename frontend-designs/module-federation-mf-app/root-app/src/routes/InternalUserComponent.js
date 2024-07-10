import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work

const InternalUserApp = lazy(() => import('InternalMf/InternalUser'));

function InternalUserComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <InternalUserApp />
      </Suspense>
    </div>
  );
}

export default InternalUserComponent;