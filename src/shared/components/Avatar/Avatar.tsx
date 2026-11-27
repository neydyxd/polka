import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './Avatar.module.scss'

type AvatarProps = Omit<ComponentProps<'span'>, 'children'> & {
  name: string
}

// «Степан Максимов» → «СМ», «Степан» → «С»
const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')

const Avatar = ({ name, className, ...rest }: AvatarProps) => (
  // инициалы скринридеру ничего не скажут, поэтому читаем полное имя
  <span
    role="img"
    aria-label={name}
    className={cn(styles.avatar, className)}
    {...rest}
  >
    {getInitials(name)}
  </span>
)

export default Avatar
