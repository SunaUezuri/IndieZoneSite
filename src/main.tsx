import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ComingSoon from './routes/ComingSoon/ComingSoon';
import Home from './routes/Home';

const routes = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
      {path: "/coming-soon", element: <ComingSoon />},
    ]
      
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
