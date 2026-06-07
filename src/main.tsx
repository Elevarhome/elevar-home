import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import LightBar from './pages/LightBar'

// Roteamento simples por caminho
const path = window.location.pathname;
const Page = path === '/light-bar' ? LightBar : Home;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
