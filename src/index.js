import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // Ensured .js extension
import reportWebVitals from './reportWebVitals.js'; // Ensured .js extension
import { AuthProvider } from './context/AuthContext.js'; // Ensured .js extension
import { ThemeProvider } from './context/ThemeContext.js'; // Import ThemeProvider
import './i18n.js'; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Cargando...</div>}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();