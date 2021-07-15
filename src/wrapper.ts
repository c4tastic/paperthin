import { createElement, useEffect } from 'react'
import type { AllHTMLAttributes, MutableRefObject, ReactNode } from 'react'

interface WrapperProps<T> {
  tagName: string
  ref: MutableRefObject<T>
  props?: AllHTMLAttributes<T>
  children?: ReactNode
  events?: ReadonlyMap<string, EventListenerOrEventListenerObject>
}

const removeClassName = <T>(props?: AllHTMLAttributes<T>) => ({
  ...props,
  class: props?.className,
  className: undefined,
})

export const createWrapper = <T extends HTMLElement>({
  tagName,
  ref,
  props,
  children,
  events,
}: WrapperProps<T>) => {
  // Maps custom events from a Web Component to a React Component
  useEffect(() => {
    const entries = events?.entries() ?? []

    for (const [name, evt] of entries) {
      ref.current.addEventListener(name, evt)
    }

    return () => {
      for (const [name, evt] of entries) {
        ref.current.removeEventListener(name, evt)
      }
    }
  }, [])

  return createElement(tagName, removeClassName<T>(props), children)
}
