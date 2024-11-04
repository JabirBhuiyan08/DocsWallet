import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='max-w-screen-xl mx-auto p-4'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
