import type {
  AllHTMLAttributes,
  ForwardedRef,
  MutableRefObject,
  ReactNode,
} from 'react'
import { createElement, useEffect } from 'react'

interface WrapperProps<T> {
  readonly tagName: string
  readonly ref: ForwardedRef<T>
  readonly props?: AllHTMLAttributes<T>
  readonly children?: ReactNode
  readonly events?: ReadonlyMap<string, EventListenerOrEventListenerObject>
}

const removeClassName = <T>(props?: WrapperProps<T>['props']) => ({
  ...props,
  class: props?.className,
  className: undefined,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isMutableRefObject = <T>(ref: any): ref is MutableRefObject<T> =>
  'current' in ref

export const createWrapper = <T extends HTMLElement>(
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  wrapperProps: WrapperProps<T>
): ReturnType<typeof createElement> => {
  const { tagName, ref, children, events, props } = wrapperProps
  // Maps custom events from a Web Component to a React Component
  useEffect(() => {
    const entries = events?.entries() ?? []

    if (ref && isMutableRefObject(ref) && entries) {
      for (const [name, evt] of entries) {
        ref.current?.addEventListener(name, evt)
      }
    }

    return () => {
      if (ref && isMutableRefObject(ref)) {
        for (const [name, evt] of entries) {
          ref?.current?.removeEventListener(name, evt)
        }
      }
    }
  }, [])

  return createElement(tagName, removeClassName<T>(props), children)
}
