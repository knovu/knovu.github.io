import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './providers';

// Custom fonts
import '@fontsource-variable/outfit/index.css';

// Global css
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
