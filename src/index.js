import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { AuthProvider } from './context/AuthContext.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { ReportProvider } from './context/ReportContext.js';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Cargando...</div>}>
      <ThemeProvider>
        <AuthProvider>
          <ReportProvider>
            <App />
          </ReportProvider>
        </AuthProvider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();