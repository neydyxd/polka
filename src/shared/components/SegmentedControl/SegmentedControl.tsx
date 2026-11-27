import { useRef, type ComponentProps, type KeyboardEvent } from 'react'
import { cn } from '@/shared/lib/cn'
import { getNextIndex } from '@/shared/lib/keyboard'
import styles from './SegmentedControl.module.scss'

type SegmentedOption<T extends string> = {
  value: T
  label: string
}

type SegmentedControlProps<T extends string> = Omit<
  ComponentProps<'div'>,
  'onChange'
> & {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  // растянуть на всю ширину родителя, сегменты делят её поровну
  stretch?: boolean
}

// Выбор одного варианта из нескольких: семантически это группа радиокнопок.
const SegmentedControl = <T extends string>({
  options,
  value,
  onChange,
  stretch = false,
  className,
  ...rest
}: SegmentedControlProps<T>) => {
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeIndex = options.findIndex((option) => option.value === value)
  const focusableIndex = activeIndex === -1 ? 0 : activeIndex

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    const nextIndex = getNextIndex(event.key, index, options.length)
    const nextOption = nextIndex === null ? undefined : options[nextIndex]
    if (nextIndex === null || !nextOption) return

    event.preventDefault()
    onChange(nextOption.value)
    optionRefs.current[nextIndex]?.focus()
  }

  return (
    <div
      role="radiogroup"
      className={cn(styles.group, stretch && styles.stretch, className)}
      {...rest}
    >
      {options.map((option, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={option.value}
            ref={(node) => {
              optionRefs.current[index] = node
            }}
            type="button"
            role="radio"
            aria-checked={isActive}
            tabIndex={index === focusableIndex ? 0 : -1}
            className={cn(styles.option, isActive && styles.active)}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default SegmentedControl
