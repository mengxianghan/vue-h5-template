import { createEnum } from 'xy-enum'

export const statusEnum = createEnum([
  { label: '启用', value: 1, key: 'enable', color: 'red' },
  { label: '禁用', value: 0, key: 'disable' },
])
