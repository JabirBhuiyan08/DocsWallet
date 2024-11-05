import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import { ThemeProvider, useTheme } from './components/ThemeContext/ThemeContext.jsx';

const App = () => {
  const { isDarkTheme } = useTheme(); // Access theme context here

  return (
    <div className={`max-w-screen mx-auto p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
