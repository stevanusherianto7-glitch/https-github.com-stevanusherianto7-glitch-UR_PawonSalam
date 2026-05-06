import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress Recharts console warnings in React 19
const originalError = console.error;
const originalWarn = console.warn;
console.error = (...args) => {
  if (typeof args[0] === 'string' && (
      args[0].includes('Support for defaultProps will be removed') ||
      args[0].includes('React does not recognize the') ||
      args[0].includes('Invalid DOM property')
  )) {
    return;
  }
  originalError(...args);
};
console.warn = (...args) => {
  if (typeof args[0] === 'string' && (
      args[0].includes('Support for defaultProps will be removed')
  )) {
    return;
  }
  originalWarn(...args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
