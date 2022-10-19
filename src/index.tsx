import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import MusicContextProvider from './context/music-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MusicContextProvider>
    <App />
  </MusicContextProvider>
);
