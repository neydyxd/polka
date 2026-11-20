export const SHELF_STATUSES = ['want', 'reading', 'done'] as const

export type ShelfStatus = (typeof SHELF_STATUSES)[number]
