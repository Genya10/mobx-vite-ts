import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import { Counter } from './components/counter/Counter.tsx'
import { Wrapper } from './components/wrapper/Wrapper'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
)
