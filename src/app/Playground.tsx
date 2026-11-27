import { useState, type ReactNode } from 'react'
import Avatar from '@/shared/components/Avatar/Avatar'
import BookCover from '@/shared/components/BookCover/BookCover'
import Button from '@/shared/components/Button/Button'
import Icon, { type IconName } from '@/shared/components/Icon/Icon'
import Input from '@/shared/components/Input/Input'
import ProgressBar from '@/shared/components/ProgressBar/ProgressBar'
import SegmentedControl from '@/shared/components/SegmentedControl/SegmentedControl'
import Stamp from '@/shared/components/Stamp/Stamp'
import StatusPill from '@/shared/components/StatusPill/StatusPill'
import Tabs from '@/shared/components/Tabs/Tabs'
import { SHELF_STATUSES, type ShelfStatus } from '@/shared/types/shelf'
import styles from './Playground.module.scss'

// Витрина компонентов этапа 1. Уйдёт, когда появится роутер и настоящие страницы.

const ICON_NAMES: IconName[] = [
  'shelf',
  'search',
  'chart',
  'logout',
  'plus',
  'back',
  'chevron-down',
  'check',
  'edit',
  'trash',
  'user',
]

const Section = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.row}>{children}</div>
  </section>
)

const Playground = () => {
  const [shelf, setShelf] = useState<ShelfStatus | 'all'>('want')
  const [noteKind, setNoteKind] = useState<'quote' | 'note'>('quote')
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [status, setStatus] = useState<ShelfStatus>('reading')

  return (
    <main className={styles.page}>
      <h1>Компоненты</h1>

      <Section title="Button">
        <Button>
          <Icon name="plus" size={16} />
          Добавить книгу
        </Button>
        <Button variant="secondary">Обновить прогресс</Button>
        <Button variant="ghost">Отмена</Button>
        <Button variant="danger">
          <Icon name="trash" size={16} />
          Убрать с полки
        </Button>
        <Button size="sm">На полку</Button>
        <Button disabled>Сохранить</Button>
        <Button variant="ghost" size="sm" aria-label="Выйти">
          <Icon name="logout" size={16} />
        </Button>
      </Section>

      <Section title="Input">
        <div className={styles.field}>
          <Input label="Email" placeholder="you@mail.ru" />
        </div>
        <div className={styles.field}>
          <Input
            label="Пароль"
            type="password"
            defaultValue="1234"
            errorText="Пароль должен быть не короче 8 символов"
          />
        </div>
      </Section>

      <Section title="StatusPill, Stamp, Avatar">
        {SHELF_STATUSES.map((s) => (
          <StatusPill key={s} status={s} />
        ))}
        <Stamp>Начата 03.11</Stamp>
        <Stamp>Не найдено</Stamp>
        <Avatar name="Степан Максимов" />
      </Section>

      <Section title="ProgressBar">
        <div className={styles.field}>
          <ProgressBar value={212} max={480} aria-label="Прогресс чтения" />
        </div>
      </Section>

      <Section title="Tabs">
        <div className={styles.wide}>
          <Tabs
            aria-label="Полки"
            items={[
              { value: 'want', label: 'Хочу прочитать', count: 8 },
              { value: 'done', label: 'Прочитано', count: 14 },
              { value: 'reading', label: 'Читаю', count: 0 },
              { value: 'all', label: 'Все', count: 24 },
            ]}
            value={shelf}
            onChange={setShelf}
          />
          <p className={styles.hint}>
            Выбрано: {shelf}. Стрелки ← → тоже работают.
          </p>
          <Tabs
            aria-label="Цитаты и заметки"
            items={[
              { value: 'quote', label: 'Цитаты', count: 4 },
              { value: 'note', label: 'Заметки', count: 2 },
            ]}
            value={noteKind}
            onChange={setNoteKind}
          />
        </div>
      </Section>

      <Section title="SegmentedControl">
        <SegmentedControl
          aria-label="Режим входа"
          options={[
            { value: 'login', label: 'Вход' },
            { value: 'signup', label: 'Регистрация' },
          ]}
          value={authMode}
          onChange={setAuthMode}
        />
        <div className={styles.narrow}>
          <SegmentedControl
            aria-label="Статус книги"
            stretch
            options={[
              { value: 'want', label: 'Хочу' },
              { value: 'reading', label: 'Читаю' },
              { value: 'done', label: 'Прочитано' },
            ]}
            value={status}
            onChange={setStatus}
          />
        </div>
      </Section>

      <Section title="BookCover">
        <div className={styles.cover}>
          <BookCover src="https://covers.openlibrary.org/b/isbn/9781593279509-M.jpg" />
        </div>
        <div className={styles.cover}>
          {/* ?default=false: если обложки нет, Open Library отдаёт 404, и срабатывает onError */}
          <BookCover src="https://covers.openlibrary.org/b/isbn/0000000000-M.jpg?default=false" />
        </div>
        <div className={styles.cover}>
          <BookCover src={null} />
        </div>
      </Section>

      <Section title="Icon">
        {ICON_NAMES.map((name) => (
          <span key={name} className={styles.icon} title={name}>
            <Icon name={name} />
          </span>
        ))}
      </Section>
    </main>
  )
}

export default Playground
