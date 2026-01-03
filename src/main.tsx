import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { HelpPage } from './pages/HelpPage.tsx';
import { ShareHandler } from './pages/ShareHandler.tsx';
import { Navigation } from './components/Navigation.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/share" element={<ShareHandler />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
