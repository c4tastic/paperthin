import { createElement, RefObject } from 'react'
import { baseProp, WrapperProps } from './models'

const removeClassName = (props?: baseProp) => ({
  ...props,
  class: props?.className,
  className: undefined,
})

export const createWrapper = <T = baseProp>({
  tagName,
  ref,
  props,
  children,
}: WrapperProps<T>) => {
  // TODO: event map handle and extra props
  return createElement(tagName, removeClassName(props), children)
}
