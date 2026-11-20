import { useId, type ComponentProps } from 'react'
import styles from './Input.module.scss'
import { cn } from '@/shared/lib/cn'

type InputProps = ComponentProps<'input'> & {
  label: string
  errorText?: string
}

const Input = ({ label, errorText, id, className, ...rest }: InputProps) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  return (
    <div className={styles.container}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        className={cn(styles.input, errorText && styles.inputError, className)}
        id={inputId}
        aria-invalid={!!errorText}
        aria-describedby={errorText ? `${inputId}-error` : undefined}
        {...rest}
      />
      {errorText && (
        <span id={`${inputId}-error`} className={styles.error}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default Input
