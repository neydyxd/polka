import type { ShelfStatus } from '@/shared/types/shelf'
import styles from './StatusPill.module.scss'
import { cn } from '@/shared/lib/cn'
import type { ComponentProps } from 'react'

type StatusPillProps = Omit<ComponentProps<'span'>, 'children'> & {
  status: ShelfStatus
}

const STATUS_LABELS: Record<ShelfStatus, string> = {
  done: 'Прочитано',
  reading: 'Читаю',
  want: 'Хочу прочитать',
}

const StatusPill = ({ status, className, ...rest }: StatusPillProps) => {
  return (
    <span
      className={cn(styles.status, styles[`status-${status}`], className)}
      {...rest}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}

export default StatusPill
