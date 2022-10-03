import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import App from './App';
import { NavigationContextProvider } from './context/NavigationContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <NavigationContextProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </NavigationContextProvider>
  </ThemeContextProvider>
);
