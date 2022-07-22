import type {
  AllHTMLAttributes,
  ForwardedRef,
  MutableRefObject,
  ReactElement,
  ReactNode,
} from 'react'
import { cloneElement, createElement, useEffect } from 'react'

interface WrapperProps<T> {
  readonly tagName: string
  readonly ref: ForwardedRef<T>
  readonly props?: AllHTMLAttributes<T>
  readonly children?: ReactNode
  readonly events?: ReadonlyMap<string, EventListenerOrEventListenerObject>
}

export const slottedNode = (
  node: Readonly<ReactElement>,
  slot: string
): ReturnType<typeof cloneElement> => cloneElement(node, { slot })

const removeClassName = <T>(props?: Readonly<WrapperProps<T>['props']>) => ({
  ...props,
  class: props?.className,
  className: undefined,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isMutableRefObject = <T>(ref: any): ref is MutableRefObject<T> =>
  'current' in ref

export const createWrapper = <T extends HTMLElement>(
  wrapperProps: Readonly<WrapperProps<T>>
): ReturnType<typeof createElement> => {
  const { tagName, ref, children, events, props } = wrapperProps
  // Maps custom events from a Web Component to a React Component
  useEffect(() => {
    const entries = events?.entries() ?? []

    if (ref && isMutableRefObject(ref)) {
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
