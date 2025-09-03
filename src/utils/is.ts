import type { Numeric } from '@/types/common'

export const isWeChat = (): boolean => navigator.userAgent.toLowerCase().includes('micromessenger')

export const sleep = (time: number): Promise<void> => new Promise(resolve => setTimeout(resolve, time))

export const isDef = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined

export const isEmpty = (value: unknown): boolean => value === null || value === undefined || value === ''

export const isNumeric = (value: Numeric): value is string => typeof value === 'number' || /^\d+(\.\d+)?$/.test(value)

export const isObject = (value: unknown): value is Record<any, any> => value !== null && typeof value === 'object'

export const isFunction = (value: unknown): value is Function => typeof value === 'function'

export const isPromise = <T = any>(value: unknown): value is Promise<T> => isObject(value) && isFunction(value.then) && isFunction(value.catch)

export function isDate(value: unknown): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]'
    && !Number.isNaN((value as Date).getTime())
}

export function isMobile(value: string): boolean {
  value = value.replace(/[^-|\d]/g, '')
  return (
    /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
  )
}

export function isIOS(): boolean {
  return typeof window !== 'undefined'
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false
}

export const isSameValue = (newValue: unknown, oldValue: unknown): boolean => JSON.stringify(newValue) === JSON.stringify(oldValue)
