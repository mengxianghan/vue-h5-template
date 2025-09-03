import { get } from 'lodash-es'

type MappingFieldNames<T> = {
  [K in keyof T]: string | ((item: Record<string, any>, index: number, array: Record<string, any>[], path: Record<string, any>[]) => any)
}
type MappingExpand = Record<string, any>

type MappedResultWithOthers<T extends MappingFieldNames<any>, E extends MappingExpand, D extends Record<string, any>> // Keep fields that are not mapped or expanded
  = Omit<D, keyof T | keyof E>
    & { [P in keyof T]: P extends keyof T ? (T[P] extends (...args: any[]) => any ? ReturnType<T[P]> : any) : never }
    & E

export function mapping<T extends MappingFieldNames<any>, E extends MappingExpand, D extends Record<string, any>>(
  data: D[] = [],
  options: {
    fieldNames?: T
    expand?: E
    treeFieldName?: string
    keepOtherFields?: boolean
    filter?: (item: D, index: number, array: D[], path: Record<string, any>[]) => boolean
  },
  path: Record<string, any>[] = [],
): MappedResultWithOthers<T, E, D>[] {
  const { fieldNames = {} as T, expand = {}, treeFieldName = '', keepOtherFields = false, filter = () => true } = options
  const result: MappedResultWithOthers<T, E, D>[] = []

  if (!Array.isArray(data))
    return result

  data.filter((item, index, array) => filter(item, index, array, path)).forEach((item, index, array) => {
    let temp: Record<string, any> = keepOtherFields ? { ...item } : {}
    let record
    let filedValue

    if (treeFieldName) {
      delete temp[treeFieldName]
    }
    for (const fieldKey in fieldNames) {
      filedValue = fieldNames[fieldKey]

      if (typeof filedValue === 'string') {
        record = get(item, filedValue)
      }

      // 树结构
      if (filedValue === treeFieldName) {
        if (record && record.length) {
          const child = mapping(
            item[treeFieldName],
            {
              fieldNames,
              expand,
              treeFieldName,
              keepOtherFields,
              filter,
            },
            [...path, item],
          )

          if (child && child.length) {
            temp[fieldKey] = child
          }
        }
      }
      // 函数
      else if (typeof filedValue === 'function') {
        temp[fieldKey] = filedValue(item, index, array, [...path, item])
      }
      else {
        temp[fieldKey] = typeof record !== 'undefined' && record !== '' ? record : ''
      }
    }
    temp = expand ? { ...temp, ...expand } : temp

    result.push(temp as MappedResultWithOthers<T, E, D>)
  })

  return result
}
