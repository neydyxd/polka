import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/shared/styles/tokens.css'
import Input from '@/shared/components/Input/Input'
import StatusPill from '@/shared/components/StatusPill/StatusPill'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div
      style={{
        padding: '0 16px',
      }}
    >
      <Input
        label="Логин"
        placeholder="you@mail.ru"
        id="email"
        name="email"
        autoComplete="email"
      />
      <StatusPill status="want">Бейджик</StatusPill>
    </div>
  </StrictMode>
)
