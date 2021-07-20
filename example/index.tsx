import { render } from 'react-dom'
import { ExampleReact } from './react/Example.react'

render(
  <ExampleReact msg="test"></ExampleReact>,
  document.getElementById('root')
)
