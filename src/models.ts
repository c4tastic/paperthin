import type { InputHTMLAttributes, ReactNode, MutableRefObject } from 'react'

export type baseProp = InputHTMLAttributes<HTMLInputElement>

export interface WrapperProps<T = baseProp> {
  tagName: string
  ref: MutableRefObject<T>
  props?: T
  children: ReactNode
}
