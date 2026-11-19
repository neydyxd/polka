import type { ComponentProps } from 'react'
import styles from './Button.module.scss'
import { cn } from '@/shared/lib/cn'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'md' | 'sm'
}

const Button = ({
  variant = 'primary',
  children,
  size = 'md',
  className,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        styles.btn,
        styles[variant],
        size === 'sm' && styles.small,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
