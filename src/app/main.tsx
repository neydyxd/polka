import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/shared/styles/tokens.css'
import Input from '@/shared/components/Input/Input'
import StatusPill from '@/shared/components/StatusPill/StatusPill'
import { SHELF_STATUSES } from '@/shared/types/shelf'
import ProgressBar from '@/shared/components/ProgressBar/ProgressBar'

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
      {SHELF_STATUSES.map((s) => (
        <StatusPill key={s} status={s} />
      ))}
      <ProgressBar value={212} max={480} aria-label="Прогресс чтения" />
    </div>
  </StrictMode>
)
