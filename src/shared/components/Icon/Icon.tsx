import type { ComponentProps, ReactNode } from 'react'

// Иконки из макета: сетка 24×24, обводка 1.7, цвет берётся из currentColor.
const ICONS = {
  shelf: (
    <path d="M4 20h16M6 20V5h3v15M10 20V8h3v12M14.5 20l-1.5-11 3-.5 2 11" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  chart: <path d="M4 20h16M7 16v-4M12 16V7M17 16v-7" />,
  logout: (
    <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M9 8l-4 4 4 4M5 12h10" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  back: <path d="M15 6l-6 6 6 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 5 5 9-10" />,
  edit: <path d="M4 20h4L19 9l-4-4L4 16v4z" />,
  trash: <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </>
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof ICONS

type IconProps = Omit<ComponentProps<'svg'>, 'children'> & {
  name: IconName
  size?: number
}

// Декоративная иконка: скрыта от скринридера. Если иконка единственное
// содержимое кнопки, подпись даёт aria-label на самой кнопке.
const Icon = ({ name, size = 24, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {ICONS[name]}
  </svg>
)

export default Icon
