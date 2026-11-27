import { useRef, type ComponentProps, type KeyboardEvent } from 'react'
import { cn } from '@/shared/lib/cn'
import { getNextIndex } from '@/shared/lib/keyboard'
import styles from './Tabs.module.scss'

type TabItem<T extends string> = {
  value: T
  label: string
  count?: number
}

type TabsProps<T extends string> = Omit<ComponentProps<'div'>, 'onChange'> & {
  items: TabItem<T>[]
  value: T
  onChange: (value: T) => void
}

const Tabs = <T extends string>({
  items,
  value,
  onChange,
  className,
  ...rest
}: TabsProps<T>) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeIndex = items.findIndex((item) => item.value === value)
  // Если value не совпало ни с одной вкладкой, фокус по Tab попадает на первую.
  const focusableIndex = activeIndex === -1 ? 0 : activeIndex

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    const nextIndex = getNextIndex(event.key, index, items.length)
    const nextItem = nextIndex === null ? undefined : items[nextIndex]
    if (nextIndex === null || !nextItem) return

    event.preventDefault()
    onChange(nextItem.value)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div role="tablist" className={cn(styles.list, className)} {...rest}>
      {items.map((item, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={item.value}
            ref={(node) => {
              tabRefs.current[index] = node
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            // roving tabindex: по Tab фокус попадает только на активную вкладку,
            // дальше по вкладкам ходят стрелками
            tabIndex={index === focusableIndex ? 0 : -1}
            className={cn(styles.tab, isActive && styles.active)}
            onClick={() => onChange(item.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {item.label}
            {item.count !== undefined && (
              <span className={styles.count}>{item.count}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
