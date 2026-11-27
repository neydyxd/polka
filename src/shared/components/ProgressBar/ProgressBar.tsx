import { cn } from '@/shared/lib/cn'
import styles from './ProgressBar.module.scss'
import type { ComponentProps } from 'react'

type ProgressBarProps = ComponentProps<'div'> & {
  value: number
  max?: number
}

const ProgressBar = ({
  value,
  max = 100,
  className,
  ...rest
}: ProgressBarProps) => {
  const safeValue = Number.isFinite(value)
    ? Math.min(Math.max(value, 0), max)
    : 0
  const percent = max > 0 ? (safeValue / max) * 100 : 0
  return (
    <div
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(styles.container, className)}
      {...rest}
    >
      <div
        className={styles.line}
        style={{
          width: `${percent}%`,
        }}
      />
    </div>
  )
}

export default ProgressBar
