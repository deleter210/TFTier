// src/main-summary.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import ResizableWrapper from './components/ResizableWrapper';
import './styles/index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ResizableWrapper defaultWidth={800} defaultHeight={600}>
        <App mode="summary" />
      </ResizableWrapper>
    </React.StrictMode>
  );
} else {
  console.error("Root container not found");
}
