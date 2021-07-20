import { forwardRef } from 'react'
import { createWrapper } from '../../../src'
import type { SimpleExampleEvent } from '../../lit/example-with-custom-event/ExampleEvent.lit'
import type { SimpleExampleEventProps } from '../../lit/example-with-custom-event/ExampleEvent.models'
import { EXAMPLE_EVENT as tagName } from '../../lit/example-with-custom-event/ExampleEvent.models'

export const ExampleReactEvent = forwardRef<
  SimpleExampleEvent | null,
  SimpleExampleEventProps
>((props, ref) => {
  const events = new Map([
    [
      'simple-event',
      () => {
        console.log('aw yeah')
      },
    ],
  ])

  return createWrapper<SimpleExampleEvent>({
    tagName,
    ref,
    props,
    events,
  })
})
