import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';

const App = memo(() => {
  return <Suspense fallback="loading">{useRoutes(routes)}</Suspense>;
});

App.displayName = 'App';

export default App;
