import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Posts from './components/Posts';
import Todo from './components/Todo';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/',
    element: <UserDetails />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'posts',
        element: <Posts />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'todo',
        element: <Todo />
      }
    ]
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
