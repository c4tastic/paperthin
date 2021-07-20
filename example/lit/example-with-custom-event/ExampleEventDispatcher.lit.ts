import { html, LitElement, customElement, css } from 'lit-element'
import type { SimpleExampleEventDispatcherProps } from './ExampleEventDispatcher.models'
import { EXAMPLE_EVENT_DISPATCHER } from './ExampleEventDispatcher.models'

@customElement(EXAMPLE_EVENT_DISPATCHER)
export class SimpleExampleEventDispatcher
  extends LitElement
  implements SimpleExampleEventDispatcherProps
{
  static styles = css`
    button {
      border-radius: 4px;
    }
  `

  private _dispatchEvent(): void {
    this.dispatchEvent(
      new CustomEvent('simple-event', {
        composed: true,
        bubbles: true,
        detail: { value: Math.random() },
      })
    )
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`<button @click=${this._dispatchEvent}>
      Click me to dispatch an event
    </button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    readonly [EXAMPLE_EVENT_DISPATCHER]: SimpleExampleEventDispatcher
  }
}
