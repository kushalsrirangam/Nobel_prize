import './tailwind.css';     // ✅ This must exist in /src
import './index.css';        // Optional
import App from './App.tsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
