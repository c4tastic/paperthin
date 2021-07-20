import { html, LitElement, customElement, property, css } from 'lit-element'
import type { SimpleExampleProps } from './Example.models'
import { EXAMPLE } from './Example.models'

@customElement(EXAMPLE)
export class SimpleExample extends LitElement implements SimpleExampleProps {
  @property({ type: String })
  msg = ''

  static styles = css`
    p {
      font-size: 2em;
    }
  `
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return html`<p>Hello ${this.msg}</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    readonly [EXAMPLE]: SimpleExample
  }
}
