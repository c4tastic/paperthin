import type { FC } from 'react'
import { ExampleReact } from './example/Example.react'
import { ExampleReactEvent } from './example-with-event/ExampleEvent.react'
import { WithChildren } from './example-with-children/ExampleWithChildren.react'

export const App: FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ExampleReact msg="World"></ExampleReact>
    <WithChildren emoji={<span>👋</span>}>Hello there</WithChildren>
    <ExampleReactEvent></ExampleReactEvent>
  </div>
)
