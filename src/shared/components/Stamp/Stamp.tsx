import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './Stamp.module.scss'

// Штамп в стиле библиотечного формуляра: «Начата 03.11», «Не найдено».
const Stamp = ({ className, ...rest }: ComponentProps<'span'>) => (
  <span className={cn(styles.stamp, className)} {...rest} />
)

export default Stamp
