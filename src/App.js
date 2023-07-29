import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import './styles/index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <h1>errot</h1>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/categories',
          element: <h2>categorie</h2>,
        },
      ],
    },
  ],
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
