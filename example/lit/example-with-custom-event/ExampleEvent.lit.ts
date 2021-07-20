import { html, LitElement, customElement } from 'lit-element'
import { EXAMPLE_EVENT } from './ExampleEvent.models'
import type { SimpleExampleEventListenerProps } from './ExampleEventListener.models'
import './ExampleEventDispatcher.lit'
import './ExampleEventListener.lit'

@customElement(EXAMPLE_EVENT)
export class SimpleExampleEvent
  extends LitElement
  implements SimpleExampleEventListenerProps
{
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`
      <simple-example-event-listener>
        <simple-example-event-dispatcher></simple-example-event-dispatcher>
      </simple-example-event-listener>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    readonly [EXAMPLE_EVENT]: SimpleExampleEvent
  }
}
