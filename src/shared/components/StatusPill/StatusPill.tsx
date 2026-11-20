import type { ShelfStatus } from '@/shared/types/shelf'
import styles from './StatusPill.module.scss'
import { cn } from '@/shared/lib/cn'

type StatusPillProps = {
  status: ShelfStatus
  children: React.ReactNode
}

const StatusPill = ({ status, children }: StatusPillProps) => {
  return (
    <span className={cn(styles.status, styles[`status-${status}`])}>
      {children}
    </span>
  )
}

export default StatusPill
