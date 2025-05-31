import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgb(var(--color-surface))',
          color: 'rgb(var(--color-text))',
          border: '1px solid rgb(var(--color-text-muted) / 0.2)',
        },
      }}
    />
  </React.StrictMode>
); 