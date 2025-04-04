import React from 'react';
import { createRoot } from 'react-dom/client';
import DashboardApp from '../components/Dashboard/DashboardApp';
import '../styles.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<DashboardApp />);
}
