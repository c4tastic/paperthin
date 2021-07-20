import type { FC } from 'react'
import { ExampleReact } from './example/Example.react'
import { ExampleReactEvent } from './example-with-event/ExampleEvent.react'

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
    <ExampleReactEvent></ExampleReactEvent>
  </div>
)
