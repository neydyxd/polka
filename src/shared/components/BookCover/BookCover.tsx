import { useState, type ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './BookCover.module.scss'

type BookCoverProps = Omit<ComponentProps<'div'>, 'children'> & {
  // ссылка на картинку; null или undefined, если обложки нет
  src?: string | null
  // альтернативный текст; по умолчанию пустой, потому что рядом с обложкой
  // почти всегда есть название книги и дублировать его скринридеру не нужно
  alt?: string
}

// Обложка 2:3. Ширину задаёт родитель, высота считается сама.
// Нет ссылки или картинка не загрузилась: показываем заглушку.
const BookCover = ({ src, alt = '', className, ...rest }: BookCoverProps) => {
  // Запоминаем, какая именно ссылка сломалась. Пришла новая ссылка,
  // и заглушка сама пропадает, без эффекта для сброса состояния.
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const showImage = Boolean(src) && src !== failedSrc

  return (
    <div
      className={cn(styles.cover, !showImage && styles.empty, className)}
      {...rest}
    >
      {showImage && src ? (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      ) : (
        <span className={styles.placeholder}>нет обложки</span>
      )}
    </div>
  )
}

export default BookCover
