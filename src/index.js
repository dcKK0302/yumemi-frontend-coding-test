import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/** bootstrap公式サイト @see - https://getbootstrap.com/ */
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
