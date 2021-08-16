import type { HTMLAttributes, ReactElement } from 'react'
import { forwardRef } from 'react'
import { createWrapper, slottedNode } from '../../../src'
import type { ExampleWithChildren } from '../../lit/example/ExampleWithChildren.lit'
import { WITH_CHILDREN_TAG_NAME as tagName } from '../../lit/example/Example.models'

interface WithChildrenProps extends HTMLAttributes<ExampleWithChildren> {
  readonly emoji?: ReactElement
}

export const WithChildren = forwardRef<
  ExampleWithChildren | null,
  WithChildrenProps
>(({ emoji, children, ...props }, ref) =>
  createWrapper<ExampleWithChildren>({
    tagName,
    ref,
    props,
    children: (
      <>
        {children}
        {emoji && slottedNode(emoji, 'emoji')}
      </>
    ),
  })
)
