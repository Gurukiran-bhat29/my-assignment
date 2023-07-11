import './App.css';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import store from './store/store';

const UserDetails = lazy(() => import('./components/UserDetails'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/details',
    element:
      <Suspense fallback={null}>
        <UserDetails />
      </Suspense>
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
