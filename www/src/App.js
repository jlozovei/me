import React, { Suspense } from 'react';

import Routes from 'routes/routes';

import Loader from 'components/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader global={true} />} maxDuration={2000}>
      <Routes />
    </Suspense>
  );
};

export default App;
