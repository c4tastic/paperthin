import { forwardRef } from 'react'
import { createWrapper } from '../../../src'
import type { SimpleExample } from '../../lit/example/Example.lit'
import type { SimpleExampleProps } from '../../lit/example/Example.models'
import { EXAMPLE as tagName } from '../../lit/example/Example.models'

export const ExampleReact = forwardRef<
  SimpleExample | null,
  SimpleExampleProps
>((props, ref) =>
  createWrapper<SimpleExample>({
    tagName,
    ref,
    props,
  })
)
