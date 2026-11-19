import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/shared/styles/tokens.css'
import Button from '@/shared/components/Button/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button onClick={() => { }}>Hello</Button>
  </StrictMode>
)
