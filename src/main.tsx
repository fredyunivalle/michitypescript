import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const pathname = window.location.pathname;
const isGithubPages = pathname.startsWith("/michitypescript");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={isGithubPages ? "/michitypescript" : "/"}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>,
);
