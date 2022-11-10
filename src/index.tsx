//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode> - strictmode impedindo o dnd de funcionar com o react 18
    <App />
  //</React.StrictMode>
);