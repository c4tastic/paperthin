import { html, LitElement, customElement, property, css } from 'lit-element'
import type { SimpleExampleEventListenerProps } from './ExampleEventListener.models'
import { EXAMPLE_EVENT_LISTENER } from './ExampleEventListener.models'

@customElement(EXAMPLE_EVENT_LISTENER)
export class SimpleExampleEventListener
  extends LitElement
  implements SimpleExampleEventListenerProps
{
  @property({ type: Number })
  data = 0

  static styles = css`
    p {
      color: blue;
    }
  `

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  private _listener(event: CustomEvent<{ value: number }>) {
    this.data = event.detail.value
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`<p @simple-event=${this._listener}><slot></slot></p>
      ${this.data === 0
        ? html`<p>No Data</p>`
        : html`<p>From Event: ${this.data}</p>`}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    readonly [EXAMPLE_EVENT_LISTENER]: SimpleExampleEventListener
  }
}
